require('dotenv').config()
const { Pool } = require('pg');

class Database {
    constructor() {
        const dbConfig = {
            user: process.env.PGUSER,
            host: process.env.PGHOST,
            database: process.env.PGDATABASE,
            password: process.env.PGPASSWORD,
            port: process.env.PGPORT
        }
        this.pool = new Pool(dbConfig);
    }

    async query(sql, params) {
        try {
            const client = await this.pool.connect();
            const result = await client.query(sql, params);
            client.release();
            return result.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }

    }

    async connect() {
        try {
            const client = await this.pool.connect();
            return client;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async end() {
        await this.pool.end();
        console.log('Connection closed');
    }
}


module.exports = Database;