import "./Nav.scss";
import {Link} from "react-router-dom";
import { Component } from "react";

class Nav extends Component {
  // state = {
  //   toggleClass: true,
  // };

  // toggleHome = () => {
  //   this.setState({
  //     toggleClass: true,
  //   });
  // };

  // toggleBtn = () => {
  //   const toggleClass = !this.state.toggleClass ? true : false;
  //   this.setState({
  //     toggleClass: toggleClass,
  //   });
  // };

  render() {
    return (
      <nav className='nav'>
        <div className='nav__top-container'>
          {/* <Link to={"/"} onClick={this.toggleHome}>
            <img src={} alt="insert logo"/> 
          </Link> */}
          <div className='nav__link-container'>
            <Link
              to={"/plantPicker"}
              // className={`nav__link ${
              //   this.state.toggleClass ? "nav__link--special" : ""
              // }`}
              // onClick={this.toggleBtn}
            >
              Plant Picker
            </Link>
            <Link
              to={"/plantList"}
              // className={`nav__link ${
              //   !this.state.toggleClass ? "nav__link--special" : ""
              // }`}
              // onClick={this.toggleBtn}
            >
              Plant List
            </Link>
            <Link
              to={"/FavoritePlants"}
              // className={`nav__link ${
              //   !this.state.toggleClass ? "nav__link--special" : ""
              // }`}
              // onClick={this.toggleBtn}
            >
              Favorite Plants
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;