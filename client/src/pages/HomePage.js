import "./HomePage.scss";
import axios from "axios";
//import {Link} from "react-router-dom";
import { Component } from "react";

class HomePage extends Component {
  state = {
    isLoggedIn : false,
    //error: "",
  }

//   handleSubmit = (event) => {
//     event.preventDefault();

//     axios
//       .post("http://localhost:8080/api/users/register", {
//         first_name: event.target.first_name.value,
//         password: event.target.password.value,
//         email: event.target.email.value,
//   })
//       .then(() => {
//           this.setState({ success: true, error: "" });
//           event.target.reset();
//         })
//       .catch((error) => {
//           this.setState({ success: false, error: error.response.data });
//         });
// };

  render () {
  return (
    <div className="homePage">
    
    </div>
  )
  }
}

export default HomePage;