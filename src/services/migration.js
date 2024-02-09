import { connect } from '../data/database.js';
//import { modelService } from './model.js';
import { ModelMapper } from '../jsonMappers/model_mapper.js';
import { ConfigurationMapper } from '../jsonMappers/configuration_mapper.js';

import { promises as fs } from 'fs';
import * as path from 'path';

class MigrationService {
    async migrateJsonToDB(directoryPath) {
        const client = await connect();

        // extract json from filesystem
        const jsonModels = await this.mapJsonFiles(directoryPath);
        
        // create DB tables if needed; a more complex project might use an ORM with a migration feature
        await this.createTables({ dropTables: true });

        // inserts json models into SQL, mapping all fields as needed
        await this.insertModels(jsonModels);

        return jsonModels;
    }

    async mapJsonFiles(directoryPath) {
        let jsonData = [];
        const files = await fs.readdir(directoryPath);
        for (const filename of files) {
            if (filename.endsWith('.json')) {
                const filePath = path.join(directoryPath, filename);
                const data = await fs.readFile(filePath, 'utf8');
                jsonData.push(JSON.parse(data));                
            }
        }

        return jsonData;
    }

    async createTables(options) {
        const client = await connect();

        const dropTables = options?.dropTables || false;
        if (dropTables) {
            const dropSql = await fs.readFile('./src/sql/drop_tables.sql', 'utf8');
            await client.query(dropSql);
        }

        const sql = await fs.readFile('./src/sql/create_tables.sql', 'utf8');
        return await client.query(sql);
    }

    async insertModels(jsonModels) {        
        for (const jsonModel of jsonModels) {
            console.log(jsonModel);
            const modelMapper = new ModelMapper(jsonModel);
            const newModel = await modelMapper.insertToDatabase();

            console.log("Model created", newModel?.rows[0]);
            
            await this.insertConfigurations(newModel?.rows[0].model_id, jsonModel.configurations);            
        }
    }

    async insertConfigurations(modelId, configurations) {          
        for (const configuration of configurations) {
            const configurationMapper = new ConfigurationMapper(configuration);
            await configurationMapper.insertToDatabase(modelId);
        }        
    }
}

export const migrationService = new MigrationService();