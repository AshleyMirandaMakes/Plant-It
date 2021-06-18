const express = require("express");
const router = express.Router();
const fs = require("fs");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
//const path = require('path');


function loadUsers() {
  return JSON.parse(fs.readFileSync("./data/users.json"));
}

function addUser(users) {
  return fs.writeFileSync("./data/users.json", JSON.stringify(users));
}

router.post("/signUp", (req, res) => {
  const { firstName, email, password, confirmPassword } = req.body;

  //password confirmation
  if (password !== confirmPassword ) {
    return res.status(400).send("Passwords do not match.");
  }

  //all fields entered
  if (!firstName || !email || !password || !confirmPassword) {
    return res.status(400).send("Please enter the required fields.");
  }

  //encrypt the pass
  bcrypt 
    .hash(password, 6)
    .then((hashedPassword) => {
      //load the users json file
      const users = loadUsers();
      
      //take the new user data, and create a new user w/ id
      const newUser = {
      id: uuidv4(),
      firstName, 
      email,
      password: hashedPassword,
      favoritePlants: []
      }
      
      //push into users array
      users.push(newUser);
      //add to json file
      addUser(users);
      return res.json({message: "registered successfully", user: addUser(users)});
    })
    .catch(() => {
      res.status(400).send("Failed registration");
    });
})

router.post("/login", (req, res ) => {
  const {email , password } = req.body;
  console.log(req.body);

    //if any fields are missing, return
  if (!email || !password) {
    return res.status(400).send("Please enter the required fields.");
  }

  //load json file
  const users = loadUsers();
 
  //assign the req.body to a value
  currentUser = req.body;

  //try to find that user
  users.find((user) => {
    if (user.email === currentUser.email) {
      const passwordsMatch = bcrypt.compareSync(
        currentUser.password,
        user.password
    );

    //if passwords don't match
    if (!passwordsMatch) {
      return res.status(400).send("Invalid password");
  }

    // if they match, create a JWT and return in the response
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET, 
      { expiresIn: "1h" }
  );

  res.json({ token });
  }})
  // .catch((error) => {
  //   res.status(400).send("Invalid Credentials", error);
  // });
});







module.exports = router;