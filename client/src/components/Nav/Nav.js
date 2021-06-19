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
        <div className='nav__container'>
          <Link to={"/"} className='nav__link--special nav__link'>
            Plant-It
          </Link>
          <div className='nav__link-container'>
            <Link className='nav__link'
              to={"/plantPicker"}
            >
              picker
            </Link>
            <Link className='nav__link'
              to={"/allPlants"}
            >
              list
            </Link>
            {/* <Link className='nav__link'
              to={"/favoritePlants"}
            >
              favorites 
            </Link> */}
            <Link className='nav__link'
              to={"/careTips"}
            >
              care
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

// {/* <Link to={"/"} onClick={this.toggleHome}>
//             <img src={} alt="insert logo"/> 
//           </Link> */}
//           <div className='nav__link-container'>
//             <Link
//               to={"/plantPicker"}
//               // className={`nav__link ${
//               //   this.state.toggleClass ? "nav__link--special" : ""
//               // }`}
//               // onClick={this.toggleBtn}
//             >
//               picker
//             </Link>
//             <Link
//               to={"/plantList"}
//               // className={`nav__link ${
//               //   !this.state.toggleClass ? "nav__link--special" : ""
//               // }`}
//               // onClick={this.toggleBtn}
//             >
//               list
//             </Link>
//             <Link
//               to={"/FavoritePlants"}
//               // className={`nav__link ${
//               //   !this.state.toggleClass ? "nav__link--special" : ""
//               // }`}
//               // onClick={this.toggleBtn}
//             >
//               favorites 
//             </Link>

export default Nav;