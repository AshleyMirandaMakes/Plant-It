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
      </>
    );
  }
} 

export default PlantDetailsPage; 