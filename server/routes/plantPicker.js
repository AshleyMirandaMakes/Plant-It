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
  const plants = pickerTest();
  const { difficulty, pets, size, light, watering } = req.body;

  // console.log(req.body)
  // if (plant.pets === "dogs") {
  //   plants.filter(plants.pets === "dog");
  // }
  //something like this


  const foundPlant = plants.find((plant) => {
    if (
      difficulty === plant.difficulty &&
      pets === plant.pets && //ugh i dunno
      size === plant.size &&
      light === plant.light &&
      watering === plant.watering
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
