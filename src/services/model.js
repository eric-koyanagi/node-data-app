import { connect } from '../data/database.js';
import { Service } from './service.js';

class ModelService extends Service {
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

    async newRecord(key) {
        const sql = 'INSERT INTO models(model_key) VALUES($1) RETURNING *';
        await this.executeQuery("BEGIN;");
        return await this.executeQuery(sql, [key]);        
    }   
    
    async endTransaction() {
        return await this.executeQuery("COMMIT;");     
    }
    
}

export const modelService = new ModelService();
