import axios from "axios";
import { Component } from "react";
import Nav from "../components/Nav/Nav";

import './PlantDetailsPage.scss';

class PlantDetailsPage extends Component {
  state ={
    isLoggedIn: false,
    user: null,
    currentPlant: "",
  }
    
  componentDidMount() {
    const {id} = this.props.match.params;

    const token = sessionStorage.getItem("token");

    if (!token) {
        return this.setState({ isLoggedIn: false });
    }
  
  axios
    .get(`http://localhost:8080/api/allPlants/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
            },
          })
    .then((response) => {
      this.setState({
        currentPlant: response.data,
        user: response.data,
        isLoggedIn : true
      })
    })
    .catch((error => {
      this.setState({
        isLoggedIn: false,
    });
      console.log(error)
    }))
  }

  render (){
    if (!this.state.user) {
      return (
          <main className="mainPage">
              <p className="mainPage__title">Loading...</p>
          </main>
      );
    }
    console.log(this.state.currentPlant); 
    //t/f don't appear -- phase 2? need some logic here. 
    const { commonName, botanicalName, light, description, image, difficulty, size, care } = this.state.currentPlant;
    
    return (
      <>
       <Nav/>
       <div className="plantDetails">
        <div className="plantDetails__container">
          <div className="plantDetails__top-container">
          <img className="plantDetails__image" src={`http://localhost:8080/${image}`} alt={commonName}/>
          <div className="plantDetails__heading-container">
            <h2 className="plantDetails__heading">{commonName}</h2>
            <h3 className="plantDetails__sub-heading">Botanical Name: <span className="plantDetails__special">{botanicalName}</span></h3>
            <h4 className="plantDetails__title">Plant Details:</h4>
            <p className="plantDetails__description">{description}</p>
          </div>
          </div>
          <div className="plantDetails__sub-container">
            <h5 className="plantDetails__details">Difficulty:  <span className="plantDetails__details--special">{difficulty}</span></h5>
            <h5 className="plantDetails__details">Size:<span className="plantDetails__details--special">{size}</span></h5>
            <h5 className="plantDetails__details">Light:<span className="plantDetails__details--special">{light}</span></h5>
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