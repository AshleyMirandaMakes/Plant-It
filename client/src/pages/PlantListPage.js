import Nav from "../components/Nav/Nav";
import PlantCard from "../components/PlantCard/PlantCard"
import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import './PlantListPage.scss';

class PlantListPage extends Component {
  state = {
    //isLoggedIn: true,
    plants: [],
    //selectedPlant: "",
  };


  getPlants() {
    axios
      .get(`http://localhost:8080/api/allPlants`)
      .then((response) => {
        this.setState({
          plants: response.data,
        });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getPlants();
  }
  

 render() {
   console.log(this.state.plants)
  return (
    <div className="plantList">
    <Nav/>
    {this.state.plants.map((plant) => (
            <PlantCard
              key={plant.id}
              id={plant.id}
              commonName={plant.commonName}
              difficulty={plant.difficulty}
              size={plant.size}
            />
          ))}
    </div>
  )
}
}

export default PlantListPage;