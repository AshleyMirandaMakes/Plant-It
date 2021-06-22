import { Link } from "react-router-dom";
import FilledStar from "../../assets/images/icons/new-star.svg";
import Star from "../../assets/images/icons/new-star-empty.svg";
import PlantDetailsPage from "../../pages/PlantDetailsPage"
import './PlantCard.scss';


function PlantCard (props){
  const {
    id,
    commonName,
    difficulty,
    size,
    image,
    favoriteHandler,
    isFavorite,
  } = props

  return(
    <section className="plantCard">
        <div className="plantCard__container">
        <div className="plantCard__sub-container">
          <img className="plantCard__left" src={`http://localhost:8080/${image}`} alt={commonName}/>
          <div className="plantCard__right">
            <div className="plantCard__top">
            <Link className="plantCard__link" key={id} to={"/allPlants/" + id}><h3 className="plantCard__heading">{commonName}</h3>
            </Link>
              {isFavorite? <button class="plantCard__button--special" onClick={() => {favoriteHandler(id)}}><img className="plantCard__icon--special" src={FilledStar} alt="favorite icon"/></button> : <button class="plantCard__button" onClick={() => {favoriteHandler(id)}}><img className="plantCard__icon" src={Star} alt="favorite icon"/></button> }
            </div>
          <div className="plantCard__subheadings">
             <h5 className="plantCard__details">Difficulty: {difficulty}</h5>
             <h5 className="plantCard__details"> Size: {size}</h5>
          </div>
          </div>
        </div>
       </div>
    </section>
  )
}

export default PlantCard;