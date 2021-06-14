import Nav from "../components/Nav/Nav";

import { Component } from "react";

class PlantPickerPage extends Component {
  state = {
    //isLoggedIn: true,
    //plants: [],
    //selectedPlant: "",
  };

  componentDidMount() {
    
  }

  
  

 render() {
   console.log(this.state.plants)
  return (
    <div className="plantList">
    <Nav/>
    <h1>Hi from the plant picker page</h1>
    </div>
  )
}
}

export default PlantPickerPage;