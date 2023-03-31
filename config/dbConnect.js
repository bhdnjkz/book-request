const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    port: process.env.PGPORT,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE
})


pool
.query('SELECT $1::text as message', ['Hello world!'])
.then((res) => console.log(res.rows[0].message))
.catch((err) => console.error('Error executing query', err.stack))

//

let txt = 'INSERT INTO test(name, email, title, author) VALUES($1, $2, $3, $4) RETURNING *'
let val = ['User1', 'somemail@email.com', 'The Cathcer in the Rye', 'J.D. Salinger']

pool
  .query(txt, val)
  .then(res => {
    console.log(res.rows[0])
  })
  .catch(error => console.error(error.stack))


exports.module = pool;