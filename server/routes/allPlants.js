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
    //console.log("favorite plants of current user -- object", favoritePlantsId)

    //---

    const favoritePlants = [];

    for ( const foundId of favoritePlantsId) {
     const favoritePlant = plants.find((plant) => {
       return( plant.id === foundId.id)
    })
    favoritePlants.push(favoritePlant)
 }
   
    const getResponse = [ foundUser, favoritePlants, plants]

    //console.log(getResponse)
    res.json(getResponse)

  })

  .get("/:id", (req, res) => {
    const plants = loadPlants();
    const { id } = req.params;

    const foundPlant = plants.find((plant) => {
      if (plant.id === id) {
        return true;
      } else {
        return false;
      }
    });

    if (!foundPlant) {
      return res
        .status(404)
        .json({ message: `Unable to find plant with id of ${id}` });
    }

    return res.json(foundPlant);
  })

  module.exports = router;
