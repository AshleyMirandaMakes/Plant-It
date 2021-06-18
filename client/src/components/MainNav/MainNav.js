import "./MainNav.scss";
import {Link} from "react-router-dom";

function MainNav () {
  return (
    <nav className='mainNav'>
    <div className='mainNav__container'>
      <div className='mainNav__link-container'>
        <Link className='mainNav__link'
          to={"/plantPicker"}
        >
          Find a new plant
        </Link>
        <Link className='mainNav__link'
          to={"/allPlants"}
        >
          See a list off all plants
        </Link>
        <Link className='mainNav__link'
          to={"/favoritePlants"}
        >
          See a list of your favorite plants
        </Link>
        <Link className='mainNav__link'
          to={"/"}
        >
          See plant care tips
        </Link>
      </div>
    </div>
  </nav>

)
}

export default MainNav;