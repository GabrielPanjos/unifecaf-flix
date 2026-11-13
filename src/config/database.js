// Configuração do pool de conexões MySQL (lê as credenciais do arquivo .env)
require('dotenv').config();
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'db_unifecaf_flix',
  waitForConnections: true,
  connectionLimit: 10,
  dateStrings: true, // devolve DATE/TIME como texto, sem conversão de fuso
  decimalNumbers: true // devolve DECIMAL como número (19.9) e não como texto
});

module.exports = pool;
