import "./HomePage.scss";
//import {Link} from "react-router-dom";
import { Component } from "react";

class HomePage extends Component {
  state = {
    isLoggedIn : false,
  }

  render () {
  return (
    <div className="homePage">
     <h1>hi from the homePage</h1>
    </div>
  )
  }
}

export default HomePage;