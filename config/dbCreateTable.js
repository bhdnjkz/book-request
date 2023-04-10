const { pool } = require('./dbConnect')

async function createTable() {
    try {
        const res = await pool.query(
            `SELECT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'books')`
        );
        if (!res.rows[0].exists) {
            await pool.query(
              `CREATE TABLE books (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255),
                author VARCHAR(255)
              )`
            );
            console.log('Table created successfully!');
        }
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = createTable;