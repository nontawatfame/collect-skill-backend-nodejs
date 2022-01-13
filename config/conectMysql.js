const mysql = require('mysql2/promise');

var db = {
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: '123456',
    database: 'collects_kill_hours',
    connectionLimit: 10
}


async function query(sql, params) {
    const connection = await mysql.createPool(db);
    const [results] = await connection.execute(sql, params);
    connection.end()
    return results;
}


module.exports = {
    query
}