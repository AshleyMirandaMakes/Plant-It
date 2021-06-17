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
    console.log(this.state.currentPlant); 
    const { commonName, botanicalName, description, image, difficulty, flowering, light, perennial, size, care } = this.state.currentPlant;
    console.log(commonName)
    
    return (
      <>
       <Nav/>
       <div className="plantDetails">
        <div className="plantDetails__container">
          <div className="plantDetails__top-container">
          <img className="plantDetails__image" src={`http://localhost:8080/${image}`} alt={commonName}/>
          <div className="plantDetails__heading-container">
            <h2 className="plantDetails__heading">{commonName}</h2>
            <h3 className="plantDetails__sub-heading">Also known as {botanicalName}</h3>
            <h4 className="plantDetails__title">Plant Details:</h4>
            <p className="plantDetails__description">{description}</p>
          </div>
          </div>
          <div className="plantDetails__sub-container">
            <h5 className="plantDetails__details">Difficulty:  {difficulty}</h5>
            <h5 className="plantDetails__details">Flowering: {flowering}</h5>
            <h5 className="plantDetails__details">Size: {size}</h5>
          </div>
          <div className="plantDetails__sub-container">
            <h5 className="plantDetails__details">Toxic to Cats: </h5>
            <h5 className="plantDetails__details">Toxic to Dogs: </h5>
            <h5 className="plantDetails__details">Light: {light}</h5>
          </div> 
          <h4 className="plantDetails__title">Care Tips:</h4>
          <p className="plantDetails__description">{care}</p>
        </div>
       </div>
      </>
    );
  }
} 

export default PlantDetailsPage; 