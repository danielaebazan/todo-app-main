const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false, 
    },
});

async function testConnection() {
    try {
        const client = await pool.connect();
        const res = await client.query('SELECT NOW()');
        console.log('Connection successful:', res.rows[0]);
        client.release();
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
    } finally {
        await pool.end();
    }
}

testConnection();