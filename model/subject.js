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
    let sql = `Select * from subject LIMIT ${start}, ${size};`
    let sqlTotal = `Select COUNT(*) as count from subject;`
    let count = await db.query(sqlTotal,null)
    const result = {
        data : await db.query(sql,null),
        total_data : count[0].count,
        total_pages : Math.ceil(count[0].count / size)
    }
    return result
}

module.exports = {
    create,
    getSubjects,
    getSubjectsPage
}