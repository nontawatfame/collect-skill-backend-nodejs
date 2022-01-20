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

async function getTagsBySubjectId(subjectId) {
    let sql = `Select * from tag WHERE subject_id = ${subjectId};`
    const result = await db.query(sql,null)
    return result
}

async function checkTagName(name, subjectId, id) {
    let sql = `Select * from tag WHERE name = '${name}'And subject_id = ${subjectId} And id != ${id};`
    const result = await db.query(sql,null)
    return result
}

module.exports = {
    create,
    getTags,
    getTagsBySubjectId,
    checkTagName
}