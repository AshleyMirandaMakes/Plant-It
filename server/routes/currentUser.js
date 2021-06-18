const express = require("express");
const router = express.Router();
const fs = require("fs");

function loadUsers() {
  return JSON.parse(fs.readFileSync("./data/users.json"));
}

router.get("/", (req, res) => {
  const users= loadUsers();

  const foundUser = users.find((user) => user.id === req.decoded.id) 

  if (foundUser) {
    res.json(foundUser);
  } else {
    res.send("User not found");
  }
});

module.exports = router;