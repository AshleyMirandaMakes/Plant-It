import "./LoginPage.scss";
import { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import Input from "../components/Input/Input";
import "./LoginPage.scss";

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
        console.log(this.state.success)
        return (
            <main className="login">
            <section className="login__container">
            <h1 className="login__heading">Plant-It</h1>
                <form className="login__form" onSubmit={this.handleSubmit}>
                    <h2 className="login__title">Login to your account</h2>

                    <Input type="text" name="email" label="Email" placeholder="" />
                    <Input type="password" name="password" label="Password" placeholder="" />

                    <button className="login__button">Log in</button>

                    {this.state.error && <div className="login__message">{this.state.error}</div>}
                    {this.state.success && <Redirect to="/main" />}
                </form>
                <p className="login__details">
                    Need an account? <Link to="/signUp" className="login__link">Sign up</Link>
                </p>
                </section>
            </main>
        );
    }
}

export default Login;