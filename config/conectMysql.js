const mysql = require('mysql2/promise');
var db = {
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: '123456',
    database: 'collects_kill_hours'
}

async function query(sql, params) {
    const connection = await mysql.createConnection(db);
    const [results] = await connection.execute(sql, params);
  
    return results;
}


module.exports = {
    query
}