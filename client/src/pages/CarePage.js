import Nav from "../components/Nav/Nav";
import axios from "axios";
import { Component } from "react";
import LightGuide from "../components/LightGuide/LightGuide"
import "./CarePage.scss"


class CarePage extends Component {
  state = {
    isLoggedIn : false,
    user: null,
  }

  componentDidMount() {
    const token = sessionStorage.getItem("token");

    if (!token) {
        return this.setState({ isLoggedIn: false });
    }

  axios
    .get("http://localhost:8080/api/currentUser", {
      headers: {
        Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            this.setState({
                user: response.data,
                isLoggedIn : true
            });
        })
        .catch((error) => {
            this.setState({
                isLoggedIn: false,
            });
        });
}

  render () {
  if (!this.state.user) {
      return (
          <main className="mainPage">
              <p className="mainPage__title">Loading...</p>
          </main>
      );
  }


  return (
    <div className="carePage">
    <Nav/>
    <LightGuide />
    </div>
  )
}
}

export default CarePage;