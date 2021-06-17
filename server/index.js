const express = require("express");
const cors = require("cors");
const app = express();
const signUpRoute = require("./routes/users");
const loginRoute = require("./routes/users");
const allPlantsRoute = require("./routes/allPlants");
const plantPickerRoute = require("./routes/plantPicker");
const favoritePlantsRoute = require("./routes/favoritePlants");

//express.static
//public images in static folder
//serve those images form data
//party


// Configuration
require("dotenv").config();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log("Incoming request");
  next();
});

// app.use((req, res, next) => {
//   if (
//     req.method === "POST" &&
//     req.headers["content-type"] !== "application/json;charset=UTF-8"
//   ) {
//     return res.status(400).json({
//       message: "POST requests must contain content-type=application/json",
//     });
//   } else {
//     next();
//   }
// });

// Routes
app.use("/api/users", signUpRoute);
app.use("api/users", loginRoute);
app.use("/api/allPlants", allPlantsRoute); //TODO add api, link properly in client -- all 3
app.use("/api/plantPicker", plantPickerRoute);
app.use("/api/favoritePlants", favoritePlantsRoute);


app.listen(port, () => {
  console.log(`Server is listening on Port ${port}`);
});