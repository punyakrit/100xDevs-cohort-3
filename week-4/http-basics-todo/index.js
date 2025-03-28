const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

let todos = [];

app.get("/", (req, res) => {
  res.json({
    todo: todos,
  });
});

app.post("/", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  todos.push({
    id: uuidv4(),
    title: title,
    description: description,
  });

  res.json({
    message: "Todo Added",
  });
});

app.delete("/", (req, res) => {
  const id = req.body.id;

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      todos.splice(i, 1);
      return res.json({
        message: "Todo Removed",
      });
    }
  }

  res.status(404).json({
    message: "Todo Not found",
  });
});

app.put("/", (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const description = req.body.description;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      todos[i].title = title;
      todos[i].description = description;
      return res.json({
        message: "Todo Updated",
      });
    }
  }

  res.status(404).json({
    message: "Todo Not found",
  });
});

app.listen(3000);
