import { connect } from '../data/database.js';

export class ModelService {
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
}
