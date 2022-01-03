var db = require("../config/conectMysql")
 
async function create(subjectId, tagId, timeStart, timeEnd, totalMinute)  {
  let sql = `INSERT INTO log_time (subject_id, tag_id, time_start, time_end, total_minute) VALUES ('${subjectId}', ${tagId}, '${timeStart}', '${timeEnd}', '${totalMinute}');`
    const result = await db.query(sql,null)

    let message = 'Error in creating logTime';
    if (result.affectedRows) {
        message = 'subject created successfully';
    }

    return {message}
}
  
async function getLogTimes() {
    let sql = `select * from log_time;`
    const result = await db.query(sql,null)
    return result
}

module.exports = {
    create,
    getLogTimes
}