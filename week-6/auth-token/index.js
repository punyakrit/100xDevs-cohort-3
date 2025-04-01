const express = require("express");

const app = express();

const users = [];

app.use(express.json());

function generateToken() {
  let options = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  let token = "";
  for (let i = 0; i < 32; i++) {
    token += options[Math.floor(Math.random() * options.length)];
  }
  return token;
}

app.get("/user", (req, res) => {
  res.json({ users });
});

app.post("/signup", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  users.push({
    token: generateToken(),
    email: email,
    password: password,
  });
  res.json("saved");
});

app.post("/signin", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = users.find((u) => u.email === email && u.password === password);

  console.log(user)

  if (user) {
    const token = generateToken();
    user.token = token;
    res.json({
      token: token,
    });
  } else {
    res.status(403).json({ message: "Wrong username and password" });
  }
});

app.listen(3000);
