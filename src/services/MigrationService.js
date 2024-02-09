import { connect } from '../data/database.js';
import { ModelService } from './ModelService.js';

import { promises as fs } from 'fs';
import * as path from 'path';

export class MigrationService {
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
            const dropSql = await fs.readFile('./src/sql/dropTables.sql', 'utf8');
            await client.query(dropSql);
        }

        const sql = await fs.readFile('./src/sql/createTables.sql', 'utf8');
        return await client.query(sql);
    }

    async insertModels(jsonModels) {
        for (const jsonModel of jsonModels) {
            console.log(jsonModel);
        }
    }

    async insertConfigurations(configurations) {

    }
}
