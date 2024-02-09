import { Client } from 'pg';

async function connect() {
  const config = require('./config.js'); 

  try {
    const client = new Client(config);
    await client.connect();
    return client;
  } catch (error) {
    console.error('Error connecting to database:', error);
    throw error;
  }
}

export default connect;