const pool = require('pg').Pool;
const pool = new pool({
  user: 'postgres',
  password: 'passwd123',
  database: 'students',
  host: 'localhost',
  port: 5432,
});

module.exports = pool;
