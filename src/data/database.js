import pg from 'pg'
import config from './config.js';

async function connect() {
  try {
    const client = new pg.Client(config);
    await client.connect();
    return client;
  } catch (error) {
    console.error('Error connecting to database:', error);
    throw error;
  }
}

export {
    connect
};