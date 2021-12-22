var db = require("./conectMysql")
 
async function insert(name)  {
    let sql = `INSERT INTO subject (name) VALUES ('${name}');`
    const result = await db.query(sql,null)

    let message = 'Error in creating subject';
    if (result.affectedRows) {
        message = 'subject created successfully';
    }

    return {message}
}

async function getSubjects() {
    let sql = `Select * from subject;`
    const result = await db.query(sql,null)
    return result
}


module.exports = {
    insert,
    getSubjects
}