import { connect } from '../data/database.js';
import { Service } from './service.js';
import { getFieldNames, getFieldTypes } from '../data/schema.js';
import format from 'pg-format';

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
