let db = require('./index.js')

let findAll = (callback) => {
  db.all(`
  SELECT DISTINCT 
  Username
  FROM 
  myTable
  `,(err, rows ) => {
    if (err) {
      callback(err,null)
    }
    else {
      callback(null,rows)
    }
  });
}







module.exports = {
  findAll,
}