const sqlite3 = require('sqlite3').verbose();
const path = require('path')

const DBPath = path.join(__dirname + "/Hotels")

let db = new sqlite3.Database(DBPath, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

// db.close((err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });

module.exports = db