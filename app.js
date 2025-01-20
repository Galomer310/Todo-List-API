const express = require("express");
const app = express();
const PORT = 5000;
const { v4: uuidv4 } = require("uuid");

app.use(express.json());

let todos = [];

app.post("/api/todos", (req, res) => {
  const { title, completed = false } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newTodo = {
    id: uuidv4(),
    title,
    completed,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.get("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const todo = todos.find((item) => item.id === id);
  if (!todo) {
    return res.status(404).json({ message: `Todo with id ${id} not found` });
  }
  res.json(todo);
});

app.put("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const todoIndex = todos.findIndex((t) => t.id === id);

  if (todoIndex === -1) {
    return res.status(404).json({ message: `Todo with id ${id} not found.` });
  }
  if (title) todos[todoIndex].title = title;
  if (completed !== undefined) todos[todoIndex].completed = completed;

  res.json(todos[todoIndex]);
});

app.delete("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const todoIndex = todos.findIndex((t) => t.id === id);

  if (todoIndex === -1) {
    return res.status(404).json({ message: `Todo with id ${id} not found.` });
  }

  todos.splice(todoIndex, 1);
  res.json({ message: `Todo with id ${id} deleted Successfully.` });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
