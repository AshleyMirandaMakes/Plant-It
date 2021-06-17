import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import MainPage from "./pages/MainPage";
import PlantPickerPage from "./pages/PlantPickerPage";
import PlantListPage from "./pages/PlantListPage";
import PlantDetailsPage from "./pages/PlantDetailsPage";
import FavoritePlantsPage from "./pages/FavoritePlantsPage";

import "./App.scss"


function App() {
  return (
    <div className="App">
        <Router>
      <Switch>
        {/* <Route path="/" component={HomePage} exact /> */}
        <Route path="/" component={LoginPage} exact />
        <Route path="/main" component={MainPage} exact/>
        <Route path="/plantPicker" component={PlantPickerPage} exact/>
        <Route path="/allPlants" component={PlantListPage} exact/>
        <Route path="/allPlants/:id" component={PlantDetailsPage} exact/>
        <Route path="/favoritePlants" component={FavoritePlantsPage} exact/> 
        <Route path="/signUp" component={SignUpPage} exact/> 
      </Switch>
    </Router>
    </div>
  );
}

export default App;
