import Nav from "../components/Nav/Nav";
import PlantCard from "../components/PlantCard/PlantCard"
import { Component } from "react";
import axios from "axios";
import './PlantListPage.scss';

class PlantListPage extends Component {
  state = {
    isLoggedIn: false,
    user: null,
    plants: [],
    favoritePlants : ["1"],
  };

  favoriteHandler = (plant) => {
    console.log(plant.id)
    // make a post req with headers
    // send the favorite list back to state: this.setState to 

  }

  isFavorite = (id) => {
    return this.state.favoritePlants.includes(id)
  }

  componentDidMount() {
    const token = sessionStorage.getItem("token");

    if (!token) {
        return this.setState({ isLoggedIn: false });
    }

    axios
      .get(`http://localhost:8080/api/allPlants`, {
        headers: {
          Authorization: `Bearer ${token}`,
              },
            })
      .then((response) => {
        this.setState({
          plants: response.data,
          user: response.data,
          isLoggedIn : true
        });
    })
    .catch((error) => {
        this.setState({
            isLoggedIn: false,
        });
        console.error(error) 
    });
  };
  

 render() {
  if (!this.state.user) {
    return (
        <main className="mainPage">
            <p className="mainPage__title">Loading...</p>
        </main>
    );
  }

  console.log(this.state.plants)
  console.log(this.state.user)

  return (
    <div className="plantList">
    <Nav/>
    {this.state.plants.map((plant) => (
            <PlantCard
              key={plant.id}
              id={plant.id}
              image={plant.image}
              commonName={plant.commonName}
              difficulty={plant.difficulty}
              size={plant.size}
              favoriteHandler={this.favoriteHandler}
              isFavorite={this.isFavorite(plant.id)}
            />
          ))}
    </div>
  )
    }

}

export default PlantListPage;