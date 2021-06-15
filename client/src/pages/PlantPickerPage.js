import Nav from "../components/Nav/Nav";
import { Component } from "react";

import "./PlantPickerPage.scss";

class PlantPickerPage extends Component {
  state = {
    //isLoggedIn: true,
    "watering" : "",
    "difficulty": "",
    "toxicDogs": false,
    "toxicCats": false,
    "light": "" ,
    "size":"",
  };

  componentDidMount() {

  }

  
  

 render() {
   console.log(this.state.plants)
  return (
    <>
      <Nav/>
        <div className="plantPicker">
        <h2 className="plantPicker__header">How much plant experience do you have?</h2>
          <div className="plantPicker__button-container">
            <button className="plantPicker__button">Beginner</button>
            <button className="plantPicker__button">Medium</button>
            <button className="plantPicker__button">Advanced</button>
        </div>
    </div>
    </>
  )
}
}

export default PlantPickerPage;