import { connect } from '../data/database.js';
import { Service } from './service.js';

class ModelService extends Service {
    async all() {
        const result = await this.executeQuery("SELECT * FROM models m", []);
        return result?.rows;
    }

    async find(id) {
        const result = await this.executeQuery("SELECT * FROM models m WHERE m.model_key=$1", [id]);
        return result?.rows[0];
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
