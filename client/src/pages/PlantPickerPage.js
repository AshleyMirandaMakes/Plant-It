import Nav from "../components/Nav/Nav";
import { Component, useState, useEffect } from "react";
import StepWizard from "react-step-wizard";
import { Link } from "react-router-dom";
import "./PlantPickerPage.scss";
import axios from "axios";
 

class PlantPickerPage extends Component {
  state = {
    difficulty : "",
    size: "",
    light: "",
    watering : "",
    safeForDogs : true,
    safeForCats : true,
    //isLoggedIn: "true"
    displayPickedPlants: false,
  };

  changeDifficultyState = (updatedDifficulty) => {
    console.log(updatedDifficulty);
    this.setState({
      difficulty: updatedDifficulty
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
  
  changeDogState = (updatedDog) => {
    console.log(updatedDog);
    this.setState({
      safeForDogs: updatedDog
    })
  }

  changeCatState = (updatedCat) => {
    console.log(updatedCat);
    this.setState({
      safeForCats: updatedCat
    })
  }

  postState = () => {
    console.log(this.state);
    axios
      .post("http://localhost:8080/api/plantPicker", {
        difficulty : this.state.difficulty,
        size : this.state.size,
        light : this.state.light,
        watering: this.state.watering,
        safeForDogs : this.state.dogs,
        safeForCats : this.state.cats,
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
          <Nav/>
          <h1 className="plantPicker__title">Here's your plant suggestions:</h1> 
            <article className="plantCard">
              <Link className="plantCard__link" key={this.state.pickedPlants.id} to={"/allPlants/" + this.state.pickedPlants.id}>
              <div className="plantCard__container">
                <div className="plantCard__left"></div>
                <div className="plantCard__right">
                  <h3 className="plantCard__heading">{this.state.pickedPlants.commonName}</h3>
                    <div className="plantCard__subheadings">
                     <h5 className="plantCard__details">Difficulty: {this.state.pickedPlants.difficulty}</h5>
                     <h5 className="plantCard__details"> Size: {this.state.pickedPlants.id}</h5>
                    </div>
                </div>
                </div>
              </Link>
            </article> 
        </>
      )
    }

    return (
      <>
        <Nav/>
        {/* <StepWizard >
          <StepOne changeDifficultyState={this.changeDifficultyState} />
          <StepTwo changePetState={this.changePetState}/>
          <StepThree changeSizeState={this.changeSizeState}/>
          <StepFour changeLightState={this.changeLightState}/>
          <StepFive changeWaterState={this.changeWaterState} />
          <StepSix postState={this.postState}/>
        </StepWizard> */}
         <StepWizard >
          <StepOne changeDifficultyState={this.changeDifficultyState} />
          <StepTwo changeSizeState={this.changeSizeState}/>
          <StepThree changeLightState={this.changeLightState}/>
          <StepFour changeWaterState={this.changeWaterState} />
          <StepFive changeDogState={this.changeDogState}/>
          <StepSix changeCatState={this.changeCatState}/>
          <StepSeven postState={this.postState}/>
        </StepWizard> 
      </>
    )
  }
}


const StepOne = (props) => {
  const { currentStep, nextStep } = useState();
  console.log(props)

  const handleClick = (difficulty) => {
    props.nextStep();
    props.changeDifficultyState(difficulty);
  }

  return(
  <div className="plantPicker">
    <h2 className="plantPicker__header">{currentStep}What experience level do you have?</h2>
      <div className="plantPicker__button-container">
        <button 
          className="plantPicker__button"
          onClick={()=> {handleClick("beginner")}}>Beginner</button>
        <button 
          className="plantPicker__button"
          onClick={() => {handleClick("medium")}}>Medium</button>
        <button 
          className="plantPicker__button"
          onClick={() => {handleClick("expert")}}>Pro</button>
      </div>
  </div>
  )
}


const StepTwo = (props) => {
  const { currentStep, nextStep } = useState();
  console.log(props)

  const handleClick = (size) => {
    props.nextStep();
    props.changeSizeState(size);
  }

  return(
    <div className="plantPicker">
      <h2 className="plantPicker__header">{currentStep}What size plant are you looking for?</h2>
        <div className="plantPicker__button-container">
          <button 
            className="plantPicker__button"
            onClick={()=> {handleClick("small")}}>Small</button>
          <button 
            className="plantPicker__button"
            onClick={() => {handleClick("medium")}}>Medium</button>
          <button 
            className="plantPicker__button"
            onClick={() => {handleClick("large")}}>Large</button>
        </div>
    </div>
    )
}

const StepThree = (props) => {
  const { currentStep, nextStep } = useState();
  console.log(props)

  const handleClick = (light) => {
    props.nextStep();
    props.changeLightState(light);
  }
  

  return(
    <div className="plantPicker">
      <h2 className="plantPicker__header">{currentStep}What type of light will this plant live in?</h2>
        <div className="plantPicker__button-container">
          <button 
            className="plantPicker__button"
            onClick={()=> {handleClick("direct")}}>Direct sunlight a few hours a day</button>
          <button 
            className="plantPicker__button"
            onClick={() => {handleClick("indirect")}}>Indirect sunlight, but in bright room for most of the day</button>
          <button 
            className="plantPicker__button"
            onClick={() => {handleClick("minimal")}}>Minimal light, or not near any windows</button>
        </div>
    </div>
    )
}

const StepFour = (props) => {
  const { currentStep, nextStep } = useState();
  console.log(props)

  const handleClick = (watering) => {
    props.nextStep();
    props.changeWaterState(watering);
  }
  
  return(
    <div className="plantPicker">
      <h2 className="plantPicker__header">{currentStep}How often do you want to water this plant?</h2>
        <div className="plantPicker__button-container">
          <button 
            className="plantPicker__button"
            onClick={()=> {handleClick("weekly")}}>About once a week</button>
          <button 
            className="plantPicker__button"
            onClick={() => {handleClick("bi-weekly")}}>About once every two weeks </button>
          <button 
            className="plantPicker__button"
            onClick={() => {handleClick("monthly")}}>About once a month</button>
        </div>
    </div>
    )
}


const StepFive = (props) => {
  const { currentStep, nextStep } = useState();
  console.log(props)

  const handleClick = (toxicToDogs) => {
    props.nextStep();
    props.changeDogState(toxicToDogs);
  }
  
  return(
    <div className="plantPicker">
      <h2 className="plantPicker__header">{currentStep}Do you need dog-safe plants?</h2>
        <div className="plantPicker__button-container">
          <button 
            className="plantPicker__button"
            onClick={()=> {handleClick(false)}}>Yes, please</button>
          <button 
            className="plantPicker__button"
            onClick={() => {handleClick(true)}}>No thanks</button>
        </div>
    </div>
    )
}

const StepSix = (props) => {
  const { currentStep, nextStep } = useState();
  console.log(props)

  const handleClick = (toxicToCats) => {
    props.nextStep();
    props.changeCatState(toxicToCats);
  }
  
  return(
    <div className="plantPicker">
      <h2 className="plantPicker__header">{currentStep}Do you need cat-safe plants?</h2>
        <div className="plantPicker__button-container">
          <button 
            className="plantPicker__button"
            onClick={()=> {handleClick(false)}}>Yes, please</button>
          <button 
            className="plantPicker__button"
            onClick={() => {handleClick(true)}}>No thanks</button>
        </div>
    </div>
    )
}

const StepSeven = (props) => {
  const { currentStep, nextStep } = useState();
  console.log(props)

  const handleClick = () => {
    props.postState();
  }
  
  return(
    <div className="plantPicker">
      <h2 className="plantPicker__header">{currentStep}Ready for you dream plants?</h2>
        <div className="plantPicker__button-container">
          <button 
            className="plantPicker__button"
            onClick={handleClick}>YESSSSSS</button>
          <button 
            className="plantPicker__button"
            onClick={handleClick}>I guess</button>
          <button 
            className="plantPicker__button"
            onClick={handleClick}>Indoor gardening wizard here I come!</button>
        </div>
    </div>
    )
}


export default PlantPickerPage;