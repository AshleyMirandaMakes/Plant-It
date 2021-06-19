const express = require("express");
const cors = require("cors");
const app = express();
const signUpRoute = require("./routes/users");
const loginRoute = require("./routes/users");
const currentRoute = require("./routes/currentUser");
const allPlantsRoute = require("./routes/allPlants");
const plantPickerRoute = require("./routes/plantPicker");
const favoritePlantsRoute = require("./routes/favoritePlants");
const authorize = require("./middleware/authorize"); //check path/ create folder


// Configuration
require("dotenv").config();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use("/public", express.static('./public/')); 

app.use((req, res, next) => {
  console.log("Incoming request");
  next();
});

// Routes
app.use("/api/users", signUpRoute);
app.use("api/users", loginRoute);
app.use(authorize);
app.use("/api/currentUser", currentRoute);
app.use("/api/allPlants", allPlantsRoute); 
app.use("/api/plantPicker", plantPickerRoute);
app.use("/api/favoritePlants", favoritePlantsRoute);


app.listen(port, () => {
  console.log(`Server is listening on Port ${port}`);
});