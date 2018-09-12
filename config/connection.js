var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgers_db"
});
var devConfig = {Host:	"muowdopceqgxjn2b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",	
Username:	"igg7l05onzhry7xp",	
Password:	"b5n347gtpznxqa5t",	
Port:	3306,	
Database:	"zk1la99eeg0qjo1t"}
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(devConfig)
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
  })
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;