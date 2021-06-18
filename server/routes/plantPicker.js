const express = require("express");
const router = express.Router();
const fs = require("fs");

function loadPlants() {
  return JSON.parse(fs.readFileSync("./data/plants.json"));
}

function pickerTest() {
  return JSON.parse(fs.readFileSync("./data/plantPickerTest.json"));
}

router
  // .get("/", (req, res ) => {
  //   const plants = pickerTest();
  //   res.json(plants);
  // })

  .post("/", (req, res) => {
  const plants = loadPlants();
  console.log(req.body);
  const { difficulty, size, light, watering, safeForDogs, safeForCats } = req.body;
  

  // const dogSafePlants = 


  // const dogSafePlants = plants.find((plant) => {
  //   if (
  //     toxicToDogs === 
  //   ) 
  // }) 


  const foundPlant = plants.find((plant) => {
    if (
      difficulty === plant.difficulty &&
      size === plant.size &&
      light === plant.light &&
      watering === plant.watering &&
      safeForDogs === plant.safeForDogs &&
      safeForCats === plant.safeForCats
      ) {
      return true;
    } else {
      return false;
    }

  })

  //all fields entered
  if (!foundPlant) {
    return res
      .status(400)
      .send("No plants match.");
  }

  return res.json(foundPlant);
});


module.exports = router;
