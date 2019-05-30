let db = require('./index.js')

let findAll = (hotelID, callback) => {
  db.all(`
  SELECT 
  *
  FROM 
  Reviews
  WHERE
  Hotel_ID = ${hotelID}
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