import Nav from "../components/Nav/Nav";
import "./FavoritePlantsPage.scss"
import axios from "axios";
import { Component } from "react";

class FavoritePlantsPage extends Component {

  //make a get req to the favotire plants
  //map through the response
  //put it in a plantCard Component

  render () {
    return (
      <div className="favoritePlants">
      <Nav/>
       <h1>Hi from the favorite plants page</h1>
      </div>
    )
  }
}

export default FavoritePlantsPage;