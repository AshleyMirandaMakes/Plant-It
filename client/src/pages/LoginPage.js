import "./LoginPage.scss";
import { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import Input from "../components/Input/Input";

class Login extends Component {
    state = {
        error: "",
        success: false,
    };

    handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post("http://localhost:8080/api/users/login", {
                email: event.target.email.value,
                password: event.target.password.value,
            })
            .then((response) => {
                sessionStorage.setItem("token", response.data.token);
                this.setState({ success: true });
            })
            .catch((error) => {
                this.setState({ error: error.response.data });
            });
    };

    render() {
        return (
            <main className="login">
                <form className="login__form" onSubmit={this.handleSubmit}>
                    <h1 className="login__title">Log in</h1>

                    <Input type="text" name="email" label="Email" placeholder="" />
                    <Input type="password" name="password" label="Password" placeholder="" />

                    <button className="login__button">Log in</button>

                    {this.state.error && <div className="login__message">{this.state.error}</div>}
                    {this.state.success && <Redirect to="/allPlants" />}
                </form>
                <p>
                    Need an account? <Link to="/signUp">Sign up</Link>
                </p>
            </main>
        );
    }
}

export default Login;