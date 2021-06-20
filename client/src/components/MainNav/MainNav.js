import "./MainNav.scss";
import {Link} from "react-router-dom";

function MainNav () {
  return (
    <nav className='mainNav'>
    <div className='mainNav__container'>
        <Link className='mainNav__link'
          to={"/plantPicker"}
        >
          Find a new plant
        </Link>
        <Link className='mainNav__link'
          to={"/allPlants"}
        >
          See a list of all plants
        </Link>
        <Link className='mainNav__link'
          to={"/favoritePlants"}
        >
          See a list of your favorite plants
        </Link>
        <Link className='mainNav__link'
          to={"/careTips"}
        >
          See plant care tips
        </Link>
      </div>
  </nav>

)
}

export default MainNav;