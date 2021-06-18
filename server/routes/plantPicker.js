const express = require("express");
const router = express.Router();
const fs = require("fs");

function loadPlants() {
  return JSON.parse(fs.readFileSync("./data/plants.json"));
}

router
  .post("/", (req, res) => {
  const plants = loadPlants();
  console.log(req.body);
  const { difficulty, size, light, watering, safeForDogs, safeForCats } = req.body;

  //I should probably consider that safeForCats/ safeForDogs only if it is clicked as true. if it's not false, I can render all plants, no? Come back to think thought later.
  
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
