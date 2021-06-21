const express = require("express");
const router = express.Router();
const fs = require("fs");

function loadPlants() {
  return JSON.parse(fs.readFileSync("./data/plants-two.json", "utf-8"));
}

function loadUsers() {
  return JSON.parse(fs.readFileSync("./data/users.json"));
}

function addFavorite(plant) {
  return fs.writeFileSync("./data/users.json", JSON.stringify(plant));
}

router 
  .get("/", (req, res) => {
    const users = loadUsers();
    const plants = loadPlants();

    const foundUser = users.find((user) => user.id === req.decoded.id) 

    const favoritePlantsId = foundUser.favoritePlants
    console.log("favorite plants of current user -- object", favoritePlantsId)

    //---

    const favoritePlants = [];


    for ( const foundId of favoritePlantsId) {
     const favoritePlant = plants.find((plant) => {
       return( plant.id === foundId.id)
    })
    favoritePlants.push(favoritePlant)
 }
   
 const getResponse = [ foundUser, favoritePlants]

    console.log(getResponse)
    res.json(getResponse)
  })


  .post("/", (req, res) => {
    const { id } = req.body;

    const users = loadUsers();

    const foundUser = users.find((user) => user.id === req.decoded.id) 
    
    const newFavoritePlant = {
      id,
    };

    users.foundUser.favoritePlants.push(newFavoritePlant);
    addFavorite(foundUser);
    return res.json(addFavoritePlant(foundUser));
  })

  

//post request
//which user
//which plant id
//add that plant to the user favoritePlants
//send back faves

//get req to be reached from fave plants page



module.exports = router;