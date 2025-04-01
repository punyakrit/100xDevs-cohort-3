const express = require("express");
const jwt = require('jsonwebtoken')

const JWT_SECRET = "123123"

const app = express();

const users = [];

app.use(express.json());


app.get("/user", (req, res) => {
  res.json({ users });
});

app.post("/signup", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  users.push({
    email: email,
    password: password,
  });
  res.json("saved");
});

app.post("/signin", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = users.find((u) => u.email === email && u.password === password);

  console.log(user);

  if (user) {
      const token = jwt.sign({
        email: user.email
      }, JWT_SECRET)
    res.json({
      token: token,
    });
  } else {
    res.status(403).json({ message: "Wrong username and password" });
  }
});

app.get("/me/:id", (req, res) => {
  const id = req.params.id;
  const decoded = jwt.verify(id, JWT_SECRET)
  const findUser = users.find((u) => 
    u.email === decoded.email
  );
  console.log(findUser)
  if (findUser) {
    res.json({
      email: findUser.email
    });
  } else {
    res.status(403).json({
      message: "User not found",
    });
  }
});

app.listen(3000);
