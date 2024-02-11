import { connect } from '../data/database.js';
import { ServiceInterface } from '../interfaces/service.js';

class Service extends ServiceInterface {
    async newRecord(key) {
            
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

export {
    Service
}