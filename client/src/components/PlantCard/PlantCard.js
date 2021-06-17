import { Link } from "react-router-dom";
import PlantDetailsPage from "../../pages/PlantDetailsPage"
import './PlantCard.scss'


function PlantCard(props) {
  const {
    id,
    commonName,
    difficulty,
    size,

  } = props;


  console.log(props);
  return(
    <section className="plantCard">
    <Link className="plantCard__link" key={id} to={"/allPlants/" + id}>
      <div className="plantCard__container">
        <div className="plantCard__left"></div>
        <div className="plantCard__right">
          <h3 className="plantCard__heading">{commonName}</h3>
          <div className="plantCard__subheadings">
            <h5 className="plantCard__details">Difficulty: {difficulty}</h5>
            <h5 className="plantCard__details"> Size: {size}</h5>
        </div>
      </div>
    </div>
    </Link>
    {/* <PlantDetailsPage plantDetails={props}/> */}
    </section>
  )
}

export default PlantCard;