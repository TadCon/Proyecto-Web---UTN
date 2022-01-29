
const knex = require('knex') ({
  client: 'mysql2',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    port: '3306',
    password : 'La casa está en orden',
    database : 'competidores'
  },

  pool: { min:0, max: 8 } 
});

module.exports = knex;