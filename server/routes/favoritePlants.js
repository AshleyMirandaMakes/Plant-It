const express = require("express");
const router = express.Router();
const fs = require("fs");

function loadPlants() {
  return JSON.parse(fs.readFileSync("./data/plants-two.json", "utf-8"));
}

function loadUsers() {
  return JSON.parse(fs.readFileSync("./data/users.json"));
}

function updateFavorites(favoritePlant) {
  return fs.writeFileSync("./data/users.json", JSON.stringify(favoritePlant));
}


router 
  .get("/", (req, res) => {
    const users = loadUsers();
    const plants = loadPlants();

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
   
    const getResponse = [ foundUser, favoritePlants]

    //console.log(getResponse)
    res.json(getResponse)
  })


  .post("/", (req, res) => {
    const users = loadUsers();

    //which plant id
    const { id } = req.body;
    // console.log("the ID is getting to the server!" , id)

     //which user
    const foundUser = users.find((user) => user.id === req.decoded.id) 
    console.log( "this is your found User on the server" ,foundUser)

    usersFavoritePlants = foundUser.favoritePlants
    console.log( "this is that users' faves on server" ,usersFavoritePlants)

    // const newFavorite ={ 
    //   id : id,
    // };

    usersFavoritePlants.push({
      id : id,
    })

    //usersFavoritePlants.filter
    
    //console.log(newFavorite)

    //add that plant to the user favoritePlants
    // usersFavoritePlants.push(newFavorite)

    console.log(usersFavoritePlants);

    //addFavorite(newFavorite)

    updateFavorites(usersFavoritePlants);

    //send back faves
    res.json(usersFavoritePlants);
  })

module.exports = router;