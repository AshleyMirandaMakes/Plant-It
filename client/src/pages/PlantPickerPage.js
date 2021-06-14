import Nav from "../components/Nav/Nav";

import { Component } from "react";

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
        <div className="plantPicker__container">
        <h2 className="plantPicker__header">How much plant experience do you have?</h2>
        <button className="plantPicker__button">Beginner</button>
        <button className="plantPicker__button">Medium</button>
        <button className="plantPicker__button">Advanced</button>
    </div>
    </>
  )
}
}

export default PlantPickerPage;