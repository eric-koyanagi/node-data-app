import { connect } from '../data/database';

async function find(id) {
    const client = await connectToDatabase();
  
    try {
      const result = await client.query('SELECT * FROM your_table');
      console.log(result.rows);
    } catch (error) {
      console.error('Error performing query:', error);
    } finally {
      await client.end();
    }
  }


export default {
    find

};