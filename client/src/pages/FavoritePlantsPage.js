import Nav from "../components/Nav/Nav";
import "./FavoritePlantsPage.scss"
import axios from "axios";
import { Component } from "react";

class FavoritePlantsPage extends Component {
  state = {
    isLoggedIn: false,
    user: null,
    plants: [],
    favoritePlants : [],
  };

  //make a get req to the favorite plants
  //map through the response
  //put it in a plantCard Component

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
        this.setState({
          user : response.data,
          isLoggedIn : true
        });
    })
    // .then((response) => {
    //   this.setState({
    //     favoritePlants : response.data,
    //   });
    // })
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
  console.log("the current user", this.state.user)
  console.log("the current user's plants", this.state.favoritePlants)



    return (
      <div className="favoritePlants">
      <Nav/>
       <h1>Hi from the favorite plants page</h1>
      </div>
    )
  }
}


export default FavoritePlantsPage;