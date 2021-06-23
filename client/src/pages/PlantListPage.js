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
    "favoritePlants": [],
    isFavorite : ""
  };

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
          user: response.data[0],
          favoritePlants : response.data[1],
          plants: response.data[2],
          isFavorite: response.data[1],
          isLoggedIn : true,
        });
    })
    .catch((error) => {
        this.setState({
            isLoggedIn: false,
        });
        console.error(error) 
    });
  };

  

  favoriteHandler = (id) => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      return this.setState({ isLoggedIn: false });
    };

    // make a delete req at some point
    // if (this.state.isFavorite) {
    //   this.setState({
    //      isFavorite : null,
    //   })
    //   console.log(this.state.isFavorite)
    // }

  
 
      axios
      .post(`http://localhost:8080/api/favoritePlants`,  
        { id : id },
        {
        headers: {
          Authorization: `Bearer ${token}`,
              }, 
            })
            .then((response) => {
              console.log(response)
              this.setState({
                 favoritePlants : response.data,
              });
          })
        }

toggleIsFavorite = (id) => {

  const updatedFavoritePlants = this.state.favoritePlants
  .map((favoritePlant) => {
    if (favoritePlant.id === id) {
      if (favoritePlant.unclicked) {
        return null;
      } else {
        return {
          ...favoritePlant,
          isFavorite : true
        };
      }
    } else {
      return this.state.favoritePlants;
    }
  })
  .filter((favoritePlant) => favoritePlant !== null);
  console.log(updatedFavoritePlants)
  this.setState(
    {
      isFavorite: updatedFavoritePlants,
    }
  );
}


 render() {
  console.log("these are the favorite", this.state.isFavorite)

  if (!this.state.user) {
    return (
        <main className="mainPage">
            <p className="mainPage__title">Loading...</p>
        </main>
    );
  }


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
              // isFavorite={this.isFavorite(plant.id)}
              isFavorite={
                this.state.favoritePlants.find((favoritePlant) => {
                  return ( favoritePlant.id === plant.id )
                 })
              }
            />
          ))}
    </div>
  )
    }

}

export default PlantListPage;