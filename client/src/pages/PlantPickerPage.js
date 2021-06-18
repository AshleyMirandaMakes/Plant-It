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
    safeForDogs : false,
    safeForCats : false,
    displayPickedPlants: false,
    // user
    isLoggedIn: false,
    user: null,
  };

  componentDidMount() {
    const token = sessionStorage.getItem("token");

    if (!token) {
        return this.setState({ isLoggedIn: false });
    }

    // Get the data from the API
  axios
    .get("http://localhost:8080/api/currentUser", {
      headers: {
        Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            this.setState({
                user: response.data,
                isLoggedIn : true
            });
        })
        .catch((error) => {
            this.setState({
                isLoggedIn: false,
            });
        });
      }

  changeDifficultyState = (updatedDifficulty) => {
    this.setState({
      difficulty: updatedDifficulty
    })
  }

  changeSizeState = (updatedSize) => {
    this.setState({
      size: updatedSize
    })
  }

  changeLightState = (updatedLight) => {
    this.setState({
      light: updatedLight
    })
  }

  changeWaterState = (updatedWater) => {
    this.setState({
      watering: updatedWater
    })
  }
  
  changeDogState = (updatedDog) => {
    this.setState({
      safeForDogs: updatedDog
    })
  }

  changeCatState = (updatedCat) => {
    this.setState({
      safeForCats: updatedCat
    })
  }

  postState = () => {
    const token = sessionStorage.getItem("token");

    if (!token) {
        return this.setState({ isLoggedIn: false });
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    }


    axios
      .post("http://localhost:8080/api/plantPicker", {
        difficulty : this.state.difficulty,
        size : this.state.size,
        light : this.state.light,
        watering: this.state.watering,
        safeForDogs : this.state.safeForDogs,
        safeForCats : this.state.safeForCats,
       
        //isLoggedIn: true,
    }, { headers: headers
          })
    .then((response) => {
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
    console.log(this.state.user)
    console.log(this.state.displayPickedPlants)
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

  const handleClick = (difficulty) => {
    console.log(difficulty)
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

  const handleClick = (size) => {
    console.log(size)
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

  const handleClick = (light) => {
    console.log(light)
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

  const handleClick = (watering) => {
    console.log(watering)
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

  const handleClick = (safeForDogs) => {
    console.log(safeForDogs)
    props.nextStep();
    props.changeDogState(safeForDogs);
  }
  
  return(
    <div className="plantPicker">
      <h2 className="plantPicker__header">{currentStep}Do you need dog-safe plants?</h2>
        <div className="plantPicker__button-container">
          <button 
            className="plantPicker__button"
            onClick={()=> {handleClick(true)}}>Yes, please</button>
          <button 
            className="plantPicker__button"
            onClick={() => {handleClick(false)}}>No thanks</button>
        </div>
    </div>
    )
}

const StepSix = (props) => {
  const { currentStep, nextStep } = useState();
  const handleClick = (safeForCats) => {
    console.log(safeForCats)
    props.nextStep();
    props.changeCatState(safeForCats);
  }
  
  return(
    <div className="plantPicker">
      <h2 className="plantPicker__header">{currentStep}Do you need cat-safe plants?</h2>
        <div className="plantPicker__button-container">
          <button 
            className="plantPicker__button"
            onClick={()=> {handleClick(true)}}>Yes, please</button>
          <button 
            className="plantPicker__button"
            onClick={() => {handleClick(false)}}>No thanks</button>
        </div>
    </div>
    )
}

const StepSeven = (props) => {
  const { currentStep, nextStep } = useState();
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