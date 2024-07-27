// #region ==> Imports
const mysql = require("mysql2");
const config = require("../config");
//#endregion

// #region ==> DB Connection
const db = mysql.createConnection(config.db);
// #endregion

// #region ==> Connect to DB
db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err.stack);
        return;
    }
    console.log("Connected to database.");
});
// #endregion

// #region ==> Exports
module.exports = db;
// #endregion
