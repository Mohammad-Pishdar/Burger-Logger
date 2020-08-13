// Set up MySQL connection.
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "us-cdbr-east-02.cleardb.com",
  port: 3306,
  user: "b847f8a32a720e",
  password: "00cc5d0d",
  database: "heroku_ae990b4cb70f67a"
});

// Make connection.
connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;