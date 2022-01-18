var db = require("../config/conectMysql")
 
async function create(name)  {
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

async function getSubjectsPage(start, size) {
    let sql = `Select * from subject ORDER BY id DESC LIMIT ${start}, ${size};`
    let sqlTotal = `Select COUNT(*) as count from subject;`
    let count = await db.query(sqlTotal,null)
    const result = {
        data : await db.query(sql,null),
        total_data : count[0].count,
        total_pages : Math.ceil(count[0].count / size)
    }
    return result
}

async function getSubjectById(id) {
    let sql = `Select * from subject WHERE id = ${id};`
    const result = await db.query(sql,null)
    return result
}

async function deleteSuject(id) {
    let sql = `DELETE FROM subject WHERE id = ${id};`
    let sql1 = `DELETE FROM log_time WHERE subject_id = ${id}`
    let sql2 = `DELETE FROM tag WHERE subject_id = ${id}`
    await db.query(sql1,null)
    await db.query(sql2,null)
    const result = await db.query(sql,null)

    let message = 'Error in delete subject';
    if (result.affectedRows) {
        message = 'subject delete successfully';
    }

    return {message}
}

async function updateByid(id, subject) {
    let sql = `UPDATE subject 
        SET name = '${subject.name}', hours_total = '${subject.hours_total}'
        WHERE id = ${id};`
    const result = await db.query(sql,null)
    return result
}

module.exports = {
    create,
    getSubjects,
    getSubjectsPage,
    deleteSuject,
    getSubjectById,
    updateByid
}