const express = require("express");

const app = express();

app.use(express.json());
const user = {
  name: "abc",
  kidney: [
    {
      healthy: true,
    },
    {
      healthy: false,
    },
  ],
};

app.get("/", function (req, res) {
  const kidney = user.kidney;
  const length = kidney.length;
  let healthKidney = 0;
  for (let i = 0; i < length; i++) {
    if (kidney[i].healthy == true) {
      healthKidney++;
    }
  }
  let unhealthyKid = length - healthKidney;
  res.json({ length, healthKidney, unhealthyKid });
});

app.post("/", function (req, res) {
  const data = req.body.isHealthy;
  console.log(data);
  const kidney = user.kidney.push({ healthy: data });

  const healthyK = 2;
  res.json({ message: "Done" });
});

app.put("/", function (req, res) {
  const kidney = user.kidney;
  const length = kidney.length;
  let healthKidney = 0;
  for (let i = 0; i < length; i++) {
    kidney[i].healthy == true
  }
  res.json({message:"done"})
});

app.listen(3000);
