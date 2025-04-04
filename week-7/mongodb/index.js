const express = require("express");
const { userModel, todoModel } = require("./db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "3ndejndje";
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const app = express();
const { z } = require("zod");

mongoose.connect(
  "mongodb+srv://admin:wyWWjD7kVASGlKJh@cluster0.gt81chd.mongodb.net/Todo-App-Database-week-7"
);
app.use(express.json());

app.post("/signup", async (req, res) => {
  const reqBody = z.object({
    email: z.string().email("invalid email hai"),
    name: z.string("enter valid"),
    password: z.string().min(3).max(10),
  });

  const parsedData =  reqBody.safeParse(req.body)

  if(!parsedData.success){
    res.json({
        message : "Enter valid format",
        error : parsedData.error
    })
    return
  }

  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  const hashedPass = await bcrypt.hash(password, 10);
  try {
    await userModel.insertOne({
      email: email,
      password: hashedPass,
      name: name,
    });

    res.json({
      message: "you are signed up",
    });
  } catch(e) {
    res.json({
      message: "Error occured"+e,
    });
  }
  return;
});

app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const checkUser = await userModel.findOne({
    email: email,
  });

  if (!checkUser) {
    res.json({
      message: "User not there",
    });
    return;
  }

  console.log(checkUser.password);
  const hashedPass = await bcrypt.compare(password, checkUser.password);

  console.log(hashedPass);
  if (hashedPass) {
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
