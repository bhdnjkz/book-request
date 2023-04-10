const Pool = require('pg').Pool

require('dotenv').config()

const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    port: process.env.PGPORT,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE
});

module.exports = {
    pool
 };