let db = require('./index.js')

let findAll = (callback) => {
  db.all(`
  SELECT 
  *
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