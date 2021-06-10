import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
        <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/main" component={MainPage} exact/>
        {/* <Route path="/plantPicker" component={MainPage} exact/>
        <Route path="/plantList" component={MainPage} exact/>
        <Route path="/plantList/:id" component={MainPage} exact/>
        <Route path="/favoritePlants" component={FavoritePlants} exact/> */}
      </Switch>
    </Router>
    </div>
  );
}

export default App;
