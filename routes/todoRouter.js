// #region ==> Imports
const express = require("express");
const router = express.Router();
const db = require("../services/db");
//#endregion

// #region ==> Middleware
const validateTodo = (req, res, next) => {
    const { title, status } = req.body;
    if (!title || typeof title !== "string") {
        return res
            .status(400)
            .json({ error: "Title is required and should be a string." });
    }
    if (status !== undefined && typeof status !== "boolean") {
        return res.status(400).json({ error: "Status should be a boolean." });
    }
    next();
};
// #endregion

// #region ==> Get all todos
router.get("/todos", (req, res) => {
    const query = "SELECT * FROM todos";
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});
// #endregion

// #region ==> Get a single todo by id
router.get("/todos/:id", (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM todos WHERE id = ${id}`;
    db.query(query, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.length === 0)
            return res.status(404).json({ error: "Todo not found." });
        res.json(result[0]);
    });
});
// #endregion

// #region ==> Create a new todo
router.post("/todos", express.json(), validateTodo, (req, res) => {
    const { title, status } = req.body;
    const statusValue = status ? 1 : 0;
    const query = `INSERT INTO todos (title, status) VALUES ('${title}', ${statusValue})`;
    db.query(query, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: result.insertId, title, status });
    });
});
// #endregion

// #region ==> Update an existing todo
router.put("/todos/:id", express.json(), validateTodo, (req, res) => {
    const { id } = req.params;
    const { title, status } = req.body;
    const statusValue = status ? 1 : 0;
    const query = `UPDATE todos SET title = '${title}', status = ${statusValue} WHERE id = ${id}`;
    db.query(query, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0)
            return res.status(404).json({ error: "Todo not found." });
        res.json({ id, title, status });
    });
});
// #endregion

// #region ==> Delete a todo
router.delete("/todos/:id", (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM todos WHERE id = ${id}`;
    db.query(query, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0)
            return res.status(404).json({ error: "Todo not found." });
        res.status(204).send();
    });
});
// #endregion

// #region ==> Exports
module.exports = router;
//#endregion
