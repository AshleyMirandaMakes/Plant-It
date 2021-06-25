import "./Nav.scss";
import {Link} from "react-router-dom";
import { Component } from "react";

class Nav extends Component {

  render() {
    return (
      <nav className='nav'>
        <div className='nav__container'>
          <Link to={"/main"} className='nav__link--special nav__link'>
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
            <Link className='nav__link'
              to={"/favoritePlants"}
            >
              favorites 
            </Link>
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

export default Nav;