import { Link } from "react-router-dom";
import './PlantCard.scss'

function PlantCard(props) {
  const {
    commonName,
    difficulty,
    size,
  } = props;


  console.log(props);
  return(
    <section className="plantCard">
      <div className="plantCard__left"></div>
      <div className="plantCard__right">
        <h3 className="plantCard__heading">{commonName}</h3>
        <div className="plantCard__subheadings">
          <h5 className="plantCard__details">Difficulty: {difficulty}</h5>
          <h5 className="plantCard__details"> Size: {size}</h5>
        </div>
      </div>
    </section>
  )
}

export default PlantCard;