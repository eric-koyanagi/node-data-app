import { connect } from '../data/database.js';
import { Service } from './service.js';
import { getFieldNames } from '../data/schema.js';
import format from 'pg-format';

class ConfigurationService extends Service {
    
    async all(modelKey, published) {
        let sql = "SELECT c.* FROM configurations c LEFT JOIN models m ON m.model_id = c.model_id WHERE m.model_key=$1";
        if (published === 'true') {
            sql += " AND c.published=true";
        }
        
        const result = await this.executeQuery(sql, [modelKey]);         
        return result?.rows;
    }
    
    async find(modelKey, configId) {
        let sql = "SELECT c.* FROM configurations c LEFT JOIN models m ON m.model_id = c.model_id WHERE m.model_key=$1 AND c.config_id=$2";
        const result = await this.executeQuery(sql, [modelKey, configId]);         
        return result?.rows[0];
    }

    async newRecord(mapper) {
        const fieldNames = getFieldNames().join(',');
        const sql = format(`INSERT INTO configurations(${fieldNames}) VALUES %L`, mapper.values);
        return await this.executeQuery(sql, []);        
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
