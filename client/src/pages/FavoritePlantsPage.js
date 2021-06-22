import Nav from "../components/Nav/Nav";
import "./FavoritePlantsPage.scss"
import axios from "axios";
import { Component } from "react";
import PlantCard from "../components/PlantCard/PlantCard"

class FavoritePlantsPage extends Component {
  state = {
    isLoggedIn: false,
    user: null,
    favoritePlants : [],
    isFavorite: "",
  };

  componentDidMount() {
    const token = sessionStorage.getItem("token");

    if (!token) {
        return this.setState({ isLoggedIn: false });
    }

    axios
      .get(`http://localhost:8080/api/favoritePlants`, {
        headers: {
          Authorization: `Bearer ${token}`,
              },
            })
      .then((response) => {
        //console.log(response.data)
        this.setState({
          isLoggedIn : true,
          user: response.data[0],
          favoritePlants : response.data[1],
          isFavorite: true,
        })
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

  //console.log(this.state.plants)
  //console.log("the current user", this.state.user)
  //console.log("the current user's plants", this.state.favoritePlants)

    return (
      <div className="favoritePlants">
      <Nav/>
      {this.state.favoritePlants.map((plant) => 
        <PlantCard 
          id={plant.id}
          image={plant.image}
          commonName={plant.commonName}
          isFavorite={plant.isFavorite}
          difficulty={plant.difficulty}
          size={plant.size}
        />
      )}
      </div>
    )
  }
}


export default FavoritePlantsPage;