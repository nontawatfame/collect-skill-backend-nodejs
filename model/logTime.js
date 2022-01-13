var db = require("../config/conectMysql")

async function create(subjectId, tagId, timeStart, timeEnd, totalSeconds) {
    let sql = `INSERT INTO log_time (subject_id, tag_id, time_start, time_end, total_seconds) VALUES ('${subjectId}', ${tagId}, '${timeStart}', '${timeEnd}', '${totalSeconds}');`
    console.log(sql)
    const result = await db.query(sql, null)

    let message = 'Error in creating logTime';
    if (result.affectedRows) {
        message = 'subject created successfully';
    }

    return { message }
}

async function getLogTimes(start, size) {
    let sql = `select l.*, s.name as subject_name, t.name as tag_name from log_time as l 
        LEFT JOIN subject as s ON s.id = l.subject_id 
        LEFT JOIN tag as t ON t.id = l.tag_id
        ORDER BY l.id DESC
        LIMIT ${start}, ${size};`
    let sqlTotal = `Select COUNT(*) as count from log_time;`
    let count = await db.query(sqlTotal, null)
    const result = {
        data: await db.query(sql, null),
        total_data: count[0].count,
        total_pages: Math.ceil(count[0].count / size)
    }
    return result
}

module.exports = {
    create,
    getLogTimes
}