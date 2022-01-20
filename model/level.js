var db = require("../config/conectMysql")
 
async function getExp(exp)  {
    let sql = `SELECT * FROM level WHERE exp_next > ${exp} ORDER BY id;`
    const result = await db.query(sql,null)

    return result
}

module.exports = {
    getExp
}