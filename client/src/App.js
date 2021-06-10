import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import PlantPickerPage from "./pages/PlantPickerPage";
import PlantListPage from "./pages/PlantListPage";
import FavoritePlantsPage from "./pages/FavoritePlantsPage";


function App() {
  return (
    <div className="App">
        <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/main" component={MainPage} exact/>
       <Route path="/plantPicker" component={PlantPickerPage} exact/>
       <Route path="/allPlants" component={PlantListPage} exact/>
        {/* <Route path="/plantList/:id" component={} exact/> */}
        <Route path="/favoritePlants" component={FavoritePlantsPage} exact/> 
      </Switch>
    </Router>
    </div>
  );
}

export default App;
