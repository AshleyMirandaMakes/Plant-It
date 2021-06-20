const express = require("express");
const router = express.Router();
const fs = require("fs");

function loadPlants() {
  return JSON.parse(fs.readFileSync("./data/plants-two.json", "utf-8"));
}

function loadUsers() {
  return JSON.parse(fs.readFileSync("./data/users.json"));
}

router 
  .get("/", (req, res) => {
    const plants = loadPlants();
    const users = loadUsers();

    const foundUser = users.find((user) => user.id === req.decoded.id) 

    const favoritePlantsId = foundUser.favoritePlants
    console.log("favorite plants of current user -- object", favoritePlantsId)

    res.json(plants)

    

    console.log(plants)

  })

  

//post request
//which user
//which plant id
//add that plant to the user favoritePlants
//send back faves

//get req to be reached from fave plants page



module.exports = router;