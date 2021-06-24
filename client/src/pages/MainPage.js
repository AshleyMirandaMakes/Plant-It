import "./MainPage.scss";
import { Component , Redirect } from "react";
import axios from "axios";
import MainNav from "../components/MainNav/MainNav"
import Nav from "../components/Nav/Nav";

class MainPage extends Component {
  state = {
    isLoggedIn : false,
    user: null,
    toSignIn : false,
    // isMainPage : true,
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
   
  handleLogout = () => {
        sessionStorage.removeItem("token");
        this.setState({
            toSignIn : true,
            user: null,
            isLoggedIn: false,
        });
      };


  render () {
  // console.log(this.state.toSignIn)
  // console.log(this.props.history)
 
  if (this.state.toSignIn) {
    this.props.history.push("/")
   }

  if (!this.state.user) {
      return (
          <main className="mainPage">
              <p className="mainPage__title">Loading...</p>
          </main>
      );
  }

  const { userName } = this.state.user;

  return (
    <div className="mainPage">
      <Nav/>
      <div className="mainPage__container">
        <div className="mainPage__title-container">
          <h1 className="mainPage__title">Welcome back,</h1>
          <h1 className="mainPage__title">{userName}!</h1>
        </div>
        <h2 className="mainPage__heading">What would you like to do?</h2>
        <MainNav/>
        <button className="mainPage__logout" onClick={this.handleLogout}>log out</button>
      </div>
    </div>
  )
  }
}

export default MainPage;