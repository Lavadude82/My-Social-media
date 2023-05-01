// These are variables for those who don't know
const ws = require("ws");
const fs = require("fs");
const app = require("express")();
const port = {
  ws: undefined,
  app: 5500,
};

//Express Server Requests

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/home/index.html");
});

app.get("/manifest.json", (req, res) => {
  res.sendFile(__dirname + "/app/app.json");
});

app.get("/favicon.ico", (req, res) => {
  res.sendFile(__dirname + "/icons/favicon.png");
});

app.get("/signup.icon", (req, res) => {
  res.sendFile(__dirname + "/icons/signup.png");
});
app.get("/login.icon", (req, res) => {
  res.sendFile(__dirname + "/icons/login.png");
});

app.get("/request", (req, res) => {
  const type = req.query.type;
  const data = JSON.parse(atob(req.query.dat));
  if (type == null || type == undefined) {
    res.send(
      JSON.stringify({
        type: "error",
        data: { msg: "Bad Request! Error E_TypeNull" },
      })
    );
  }
});

app.listen(port.app, () => {
  console.log(`You are Firewalled, port : ${port.app}`);
});
