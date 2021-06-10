const express = require("express");
const router = express.Router();
const fs = require("fs");

function loadPlants() {
  return JSON.parse(fs.readFileSync("./data/plants.json", "utf-8"));
}

router
  .get("/", (req, res) => {
    const plants = loadPlants();
    res.json(plants);
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
