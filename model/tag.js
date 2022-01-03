var db = require("../config/conectMysql")
 
async function create(name, subject_id)  {
    let sql = `INSERT INTO tag (name, subject_id) VALUES ('${name}', '${subject_id}');`
    const result = await db.query(sql,null)

    let message = 'Error in creating tag';
    if (result.affectedRows) {
        message = 'tag created successfully';
    }

    return {message}
}

async function getTags() {
    let sql = `Select * from tag;`
    const result = await db.query(sql,null)
    return result
}

module.exports = {
    create,
    getTags
}