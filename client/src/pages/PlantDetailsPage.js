import { Component } from "react";

import './PlantDetailsPage.scss';

function PlantDetailsPage (props){
  const {
    id,
    commonName,
    difficulty,
    size,
    
  } = props.plantDetails;
    
    console.log();
    return (
      

      <li className="plantDetails__container">
        {/* <img className="plantDetails__image" src={image} alt={title} /> */}
        <div className="plantDetails__headings">
          <h3 className="plantDetails__title">{commonName}</h3> 
        </div>
      </li>
    );
} 

export default PlantDetailsPage; 