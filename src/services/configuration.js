import { connect } from '../data/database.js';
import { Service } from './service.js';

class ConfigurationService extends Service {
    async find(id) {
        // const client = await connect();
    
        // try {
        //     const result = await client.query('');
        //     console.log(result.rows);
        // } catch (error) {
        //     console.error('Error performing query:', error);
        // } finally {
        //     await client.end();
        // }
    }

    async newRecord(modelId, mapper) {
        const sql = `INSERT INTO configurations(
            model_id, 
            product_name, 
            advertising_names, 
            brand,
            features,
            firmware,
            provisioning,
            published,
            testing_status,
            testing_ehitelist,
            bluetooth_data_hunks,
            bluetooth_mtu
        ) VALUES `;

        console.log("INSERT INTO configurations", sql, modelId, mapper);
        //return await this.executeQuery(sql, [key]);        
    }

    async executeQuery(sql, values) {
        const client = await connect();
    
        try {
            return await client.query(sql, values);            
        } catch (error) {
            console.error('Error performing query:', error);
        } finally {
            await client.end();
        }
    }
    
}

export const configurationService = new ConfigurationService();
