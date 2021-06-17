import "./MainPage.scss";
import { Component , Link } from "react";
import axios from "axios";

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

    // Get the data from the API
  axios
    .get("http://localhost:8080/api/users/current", {
      headers: {
        Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            this.setState({
                user: response.data,
            });
        })
        .catch((error) => {
            this.setState({
                isLoggedIn: false,
            });
        });
}

  render () {
  //   if (!this.state.isLoggedIn) {
  //     return (
  //         <main className="dashboard">
  //             <p>
  //                 You must be logged in to see this page. <Link to="/login">Log in</Link>
  //             </p>
  //         </main>
  //     );
  // }

  if (!this.state.user) {
      return (
          <main className="dashboard">
              <p>Loading...</p>
          </main>
      );
  }

  const { firstName } = this.state.user;

  return (
    <div className="mainPage">
     <Nav/>
     <p>Welcome back, {firstName}!</p>
    </div>
  )
  }
}

export default MainPage;