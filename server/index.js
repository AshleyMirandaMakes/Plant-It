const express = require("express");
const cors = require("cors");
const app = express();
const signUpRoute = require("./routes/signUp");
const loginRoute = require("./routes/login");
const allPlantsRoute = require("./routes/allPlants");
const plantPickerRoute = require("./routes/plantPicker");
const favoritePlantsRoute = require("./routes/favoritePlants");



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

app.use((req, res, next) => {
  if (
    req.method === "POST" &&
    req.headers["content-type"] !== "application/json;charset=UTF-8"
  ) {
    return res.status(400).json({
      message: "POST requests must contain content-type=application/json",
    });
  } else {
    next();
  }
});

// Routes
app.use("/users/signup", signUpRoute);
app.use("/users/login", loginRoute);
app.use("/allPlants", allPlantsRoute);
app.use("/plantPicker", plantPickerRoute);
app.use("/favoritePlants", favoritePlantsRoute);


app.listen(port, () => {
  console.log(`Server is listening on Port ${port}`);
});