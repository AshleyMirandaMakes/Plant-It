import "./MainPage.scss";
import {Link} from "react-router-dom";
import { Component } from "react";

import Nav from "../components/Nav/Nav";

class MainPage extends Component {
  state = {
    isLoggedIn : false,
  }

  render () {
  return (
    <div className="mainPage">
     <Nav/>
     <h1>Hi from the main page</h1>
    </div>
  )
  }
}

export default MainPage;