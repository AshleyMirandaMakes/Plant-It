import axios from "axios";
import { Component } from "react";
import Nav from "../components/Nav/Nav";

import './PlantDetailsPage.scss';

class PlantDetailsPage extends Component {
  state ={
    currentPlant: "",
  }
    
  componentDidMount() {
    const {id} = this.props.match.params;
  
  axios
    .get(`http://localhost:8080/api/allPlants/${id}`)
    .then((response) => {
      this.setState({
        currentPlant: response.data
      })
    })
    .catch((error => {
      console.log(error)
    }))
  }

  render (){
    console.log(this.state.currentPlant); // ADD IMAGES
    const { commonName, botanicalName, description, difficulty, flowering, light, perennial, size, care } = this.state.currentPlant;
    console.log(commonName)
    
    return (
      <>
       <Nav/>
       <div className="plantDetails">
        <div className="plantDetails__container">
          <div className="plantDetails__top-container">
          <div className="plantDetails__image"></div>
          <h2>{commonName}</h2>
          <h3>Also known as {botanicalName}</h3>
          </div>
          <p>{description}</p>
          <div className="plantDetails__sub-container">
            <h4 className="plantDetails__details">Difficulty:  {difficulty}</h4>
            <h4 className="plantDetails__details">Flowering: {flowering}</h4>
            <h4 className="plantDetails__details">Toxic to Dogs: </h4>
            <h4 className="plantDetails__details">Toxic to Cats: </h4>
            <h4 className="plantDetails__details">Light: {light}</h4>
            <h4 className="plantDetails__details">Perennial: {perennial}</h4>
            <h4 className="plantDetails__details">Size: {size}</h4>
            <p>{care}</p>
          </div> 
        </div>
       </div>
      </>
    );
  }
} 

export default PlantDetailsPage; 