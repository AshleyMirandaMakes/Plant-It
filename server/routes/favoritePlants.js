const express = require("express");
const router = express.Router();
const fs = require("fs");

function loadPlants() {
  return JSON.parse(fs.readFileSync("./data/plants-two.json", "utf-8"));
}

function loadUsers() {
  return JSON.parse(fs.readFileSync("./data/users.json"));
}

function updateUsers(user) {
  return fs.writeFileSync("./data/users.json", JSON.stringify(user));
}


router 
  .get("/", (req, res) => {
    const users = loadUsers();
    const plants = loadPlants();

    const foundUser = users.find((user) => user.id === req.decoded.id) 

    const favoritePlantsId = foundUser.favoritePlants

    const favoritePlants = [];

    for ( const foundId of favoritePlantsId) {
     const favoritePlant = plants.find((plant) => {
       return( plant.id === foundId.id)
    })
    favoritePlants.push(favoritePlant)
 }
    const getResponse = [ foundUser, favoritePlants]

    res.json(getResponse)
  })


  .post("/", (req, res) => {
    const users = loadUsers();
    const foundUser = users.find((user) => user.id === req.decoded.id) 

    const { id } = req.body;

    usersFavoritePlants = foundUser.favoritePlants;

    const newFavorite ={ 
      id : id,
    };

    // console.log("newFavorite.id", newFavorite.id);
    // console.log("usersFavoritePlants.id", usersFavoritePlants.id)
    
   
    // if ( newFavorite.id === usersFavoritePlants.id) {
    //   usersFavoritePlants.pop(newFavorite)
    // } else {
    //   usersFavoritePlants.push(newFavorite);
    //
   usersFavoritePlants.push(newFavorite);

    //rewrite the current user in the users array
      users.find((user) => {
        if (user.id === foundUser.id) {
        user = foundUser;
        }     
      }
      )
    
  //  console.log("updated users", users);
   
    updateUsers(users);

    //edit this
    res.json(usersFavoritePlants);
  })

module.exports = router;
