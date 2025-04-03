const express = require("express");
const app = express();
const { userModel, todoModel } = require("./db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "3ndejndje";
const mongoose = require("mongoose");
app.use(express.json());
mongoose.connect(
  "mongodb+srv://admin:wyWWjD7kVASGlKJh@cluster0.gt81chd.mongodb.net/Todo-App-Database-week-7"
);

app.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  await userModel.insertOne({
    email: email,
    password: password,
    name: name,
  });

  res.json({
    message: "you are signed up",
  });
});

app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const checkUser = await userModel.findOne({
    email: email,
    password: password,
  });
  if (checkUser) {
    const token = jwt.sign({ userId: checkUser._id.toString() }, JWT_SECRET);
    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Wrong creds",
    });
  }
});

function auth(req, res, next) {
  const token = req.headers.token;
  if (!token) {
    res.json({
      message: "Token not found",
    });
  }
  const decodedData = jwt.verify(token, JWT_SECRET);
  if (decodedData) {
    req.userId = decodedData.userId;
    next();
  } else {
    res.status(404).json({
      message: "Incorrect creds",
    });
  }
}

app.post("/todo", auth, async (req, res) => {
  const title = req.body.title;
  const done = false;
  const userId = req.userId;

  await todoModel.create({
    title: title,
    done: done,
    userId: userId,
  });
  res.json({
    message: "Todo Added",
  });
});

app.get("/todos", auth, async (req, res) => {
  const userId = req.userId;
  console.log(userId);
  const data = await todoModel.find({
    userId,
  });
  res.json({
    todos: data,
  });
});

app.listen(3000);
