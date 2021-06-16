import Nav from "../components/Nav/Nav";
import { Component, useState, useEffect } from "react";
import StepWizard from "react-step-wizard";
import { Redirect } from "react-router-dom";


import "./PlantPickerPage.scss";
import axios from "axios";
 

//  render() {
//    console.log(this.state.plants)
//   return (
//     <>
//       <Nav/>
//         <div className="plantPicker">
//         <h2 className="plantPicker__header">How much plant experience do you have?</h2>
//           <div className="plantPicker__button-container">
//             <button className="plantPicker__button">Beginner</button>
//             <button className="plantPicker__button">Medium</button>
//             <button className="plantPicker__button">Advanced</button>
//         </div>
//     </div>
//     </>
//   )
// }
// }
// };


class PlantPickerPage extends Component {
  state = {
    difficulty : "",
    pets : "",
    size: "",
    light: "",
    watering : "",
    //isLoggedIn: "true"
    displayPickedPlants: false,
  };

  changeDifficultyState = (updatedDifficulty) => {
    console.log(updatedDifficulty);
    this.setState({
      difficulty: updatedDifficulty
    })
  }

  changePetState = (updatedPets) => {
    console.log(updatedPets);
    this.setState({
      pets: updatedPets
    })
  }

  changeSizeState = (updatedSize) => {
    console.log(updatedSize);
    this.setState({
      size: updatedSize
    })
  }

  changeLightState = (updatedLight) => {
    console.log(updatedLight);
    this.setState({
      light: updatedLight
    })
  }

  changeWaterState = (updatedWater) => {
    console.log(updatedWater);
    this.setState({
      watering: updatedWater
    })
  }
  
  postState = () => {
    console.log(this.state);
    axios
      .post("http://localhost:8080/api/plantPicker", {
        difficulty : this.state.difficulty,
        pets : this.state.pets,
        size : this.state.size,
        light : this.state.light,
        watering: this.state.watering,
       // isLoggedIn: this.state.isLoggedIn,
    })
    .then((response) => {
      console.log(response)
      this.setState({
        displayPickedPlants: true,
        pickedPlants: response.data
      })
    })
    .catch((error => {
      console.log(error)
    }))
    
  }

  render() {
    if (this.state.displayPickedPlants) {
      return (
        <>
        {this.state.pickedPlants.commonName}
        </>
      );
    }

    return (
      <>
        <Nav/>
        <StepWizard >
          <StepOne changeDifficultyState={this.changeDifficultyState} />
          <StepTwo changePetState={this.changePetState}/>
          <StepThree changeSizeState={this.changeSizeState}/>
          <StepFour changeLightState={this.changeLightState}/>
          <StepFive changeWaterState={this.changeWaterState} />
          <StepSix postState={this.postState}/>
        </StepWizard>
      </>
    )
  }
}


const StepOne = (props) => {
  const { currentStep, nextStep } = useState();
  console.log(props)

  const handleClick = () => {
    props.nextStep();
    props.changeDifficultyState("medium");
  }
  

  return(
  <div>
    <h3>{currentStep}"What experience level do you have?"</h3>
    <button onClick={handleClick}>Beginner</button>
    <button onClick={handleClick}>Medium</button>
    <button onClick={handleClick}>Pro</button>
  </div>
  )
}

const StepTwo = (props) => {
  const { currentStep, nextStep } = useState();
  console.log(props)

  const handleClick = () => {
    props.nextStep();
    props.changePetState("dog");
  }
  

  return(
  <div>
    <h3>{currentStep}"What experience level do you have?"</h3>
    <button onClick={handleClick}>Doggos</button>
    <button onClick={handleClick}>Cats</button>
    <button onClick={handleClick}>Only more plants</button>
  </div>
  )
}

const StepThree = (props) => {
  const { currentStep, nextStep } = useState();
  console.log(props)

  const handleClick = () => {
    props.nextStep();
    props.changeSizeState("large");
  }
  

  return(
  <div>
    <h3>{currentStep}"What size plant are you looking for?"</h3>
    <button onClick={handleClick}>Small</button>
    <button onClick={handleClick}>Medium</button>
    <button onClick={handleClick}>Large</button>
  </div>
  )
}

const StepFour = (props) => {
  const { currentStep, nextStep } = useState();
  console.log(props)

  const handleClick = () => {
    props.nextStep();
    props.changeLightState("direct");
  }
  

  return(
  <div>
    <h3>{currentStep}"What time of light is in your space?"</h3>
    <button onClick={handleClick}>Direct sunlight a few hours a day</button>
    <button onClick={handleClick}>Indirect sunlight, but bright</button>
    <button onClick={handleClick}>Minimal light</button>
  </div>
  )
}

const StepFive = (props) => {
  const { currentStep, nextStep } = useState();
  console.log(props)

  const handleClick = () => {
    props.nextStep();
    props.changeWaterState("weekly");
  }
  

  return(
  <div>
    <h3>{currentStep}"How often do you want to water this plant?"</h3>
    <button onClick={handleClick}>About once a week</button>
    <button onClick={handleClick}>About one for every two weeks </button>
    <button onClick={handleClick}>About once a month</button>
  </div>
  )
}

const StepSix = (props) => {
  const { currentStep, nextStep } = useState();
  console.log(props)

  const handleClick = () => {
    props.postState();
  }
  

  return(
  <div>
    <h3>{currentStep}"Ready for you dream plants?"</h3>
    <button onClick={handleClick}>YESSSS</button>
    <button onClick={handleClick}>Gimme!</button>
    <button onClick={handleClick}>Indoor gardening wizard here I come!</button>
  </div>
  )
}


export default PlantPickerPage;