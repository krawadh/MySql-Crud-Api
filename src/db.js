const mysql = require("mysql2/promise");

// Create a connection to the database
/*const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "anshika",
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// Export the connection
module.exports = connection;*/

// Create the connection pool
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "anshika",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Export the pool
module.exports = pool; //.promise()// Using promise() for async/await syntax
