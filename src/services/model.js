import { connect } from '../data/database.js';

class ModelService {
    async find(id) {
        const client = await connect();
    
        try {
            const result = await client.query('');
            console.log(result.rows);
        } catch (error) {
            console.error('Error performing query:', error);
        } finally {
            await client.end();
        }
    }

    async newModel(key) {
        const sql = 'INSERT INTO models(model_key) VALUES($1) RETURNING *'
        return await this.executeQuery(sql, [key]);        
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

export const modelService = new ModelService();
