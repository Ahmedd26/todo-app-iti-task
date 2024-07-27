# Todo App with Express.js and MySQL

This project is a simple Todo application built with **Express.js** and **MySQL**. It supports CRUD (Create, Read, Update, Delete) operations for managing todo items.

The project uses **MySQL** as the database and **Express.js** for the server.

### 1- Install dependencies

`npm install`

### 2- Run the Server

`npm run dev`

---

## End Points

#### GET all todos

> GET /api/todos

#### GET a todo

> GET /api/todos/:id

#### Create a todo

> POST /api/todos/

Request Body:
`{
  "title": "Sample Todo",
  "status": true
}`

#### Update a todo

> POST /api/todos/:id

Request Body:
`{
  "title": "Updated Todo",
  "status": false
}`

#### Delete a todo

> DELETE /api/todos/:id

---

## DATABASE SCHEMA

| Field  | Type         | Null | Key | Default | Extra          |
| ------ | ------------ | ---- | --- | ------- | -------------- |
| id     | int          | NO   | PRI | NULL    | auto_increment |
| title  | varchar(255) | No   |     | NULL    |                |
| status | tinyint(1)   | No   |     | Null    |                |

---

> Note: Make sure that you have Mysql installed, a database called `my_database` with a table named `todos` with the above schema.
> Feel free to adjust `./config.js` to your desired configuration.
