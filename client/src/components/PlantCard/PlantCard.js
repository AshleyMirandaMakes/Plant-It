import { Link } from "react-router-dom";

function PlantCard(props) {
  const {
    commonName,
  } = props;


  console.log(props);
  return(
    <section className="plantCard">
        <h3 className="plantCard__heading">{commonName}</h3>
    </section>
  )
}

export default PlantCard;