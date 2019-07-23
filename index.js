require('dotenv').config();

console.log(process.env);

const config = require('./connection');

console.log(config);

process.env.JAWSDB_URL;