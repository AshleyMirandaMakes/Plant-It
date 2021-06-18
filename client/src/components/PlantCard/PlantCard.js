import { Link } from "react-router-dom";
//import { Component } from "react";
import Star from "../../assets/images/icons/star-empty.svg";
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
    isFavorite = "",
  } = props

  return(
    <section className="plantCard">
      <Link className="plantCard__link" key={id} to={"/allPlants/" + id}>
        <div className="plantCard__container">
          <img className="plantCard__left" src={`http://localhost:8080/${image}`} alt={commonName}/>
          <div className="plantCard__right">
            <div className="plantCard__top">
              <h3 className="plantCard__heading">{commonName}</h3>
              <button className={isFavorite? "plantCard__button--special" : "plantCard__button"} onClick={() => {favoriteHandler(id)}}><img className="plantCard__icon" src={Star} alt="favorite icon"/></button>
            </div>
          <div className="plantCard__subheadings">
             <h5 className="plantCard__details">Difficulty: {difficulty}</h5>
             <h5 className="plantCard__details"> Size: {size}</h5>
          </div>
        </div>
       </div>
      </Link>
    </section>
  )
}

export default PlantCard;