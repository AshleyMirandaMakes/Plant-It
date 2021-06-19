import "./SignUpPage.scss";
import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Input from "../components/Input/Input";

class Signup extends Component {
  state = {
    error: "",
    success: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();

  axios
    .post("http://localhost:8080/api/users/signUp", {
      firstName: event.target.firstName.value,
      email: event.target.email.value,
      password: event.target.password.value,
      confirmPassword: event.target.confirmPassword.value,
    })
    .then(() => {
      this.setState({ success: true, error: "" });
      event.target.reset();
            })
    .catch((error) => {
      this.setState({ success: false, error: error.response.data });
    });
  };

  render() {
    return (
      <main className="signUp">
        <section className="signUp__container">
        <form className="signUp__form" onSubmit={this.handleSubmit}>
          {/* <h1 className="signUp__title">Sign up</h1> */}
            <Input type="text" name="firstName" label="First Name" />
            <Input type="text" name="email" label="Email" />
            <Input type="password" name="password" label="Password" />
            <Input type="password" name="confirmPassword" label="Confirm Password" />
            <button className="signUp__button">Sign up</button>
            {this.state.success && <div className="signUp__message">Signed up!</div>}
            {this.state.error && <div className="signUp__message">{this.state.error}</div>}
        </form>
          <p className="signUp__details">
            Have an account? <Link className="signUp__link" to="/">Log in</Link>
          </p>
          </section>
            </main>
        );
    }
}

export default Signup;