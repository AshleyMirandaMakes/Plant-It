import "./MainPage.scss";
import { Component , Link } from "react";
import axios from "axios";
import MainNav from "../components/MainNav/MainNav"
import Nav from "../components/Nav/Nav";

class MainPage extends Component {
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

  const { firstName } = this.state.user;

  return (
    <div className="mainPage">
      <Nav/>
      <div className="mainPage__container">
        <div className="mainPage__title-container">
          <h1 className="mainPage__title">Welcome back,</h1>
          <h1 className="mainPage__title">{firstName}!</h1>
        </div>
        <h2 className="mainPage__heading">What would you like to do?</h2>
        <MainNav/>
      </div>
    </div>
  )
  }
}

export default MainPage;