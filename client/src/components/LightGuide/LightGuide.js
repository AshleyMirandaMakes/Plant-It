import "./LightGuide.scss";
import LightGuideImage from "../../assets/images/care/light-guide-drawing.jpeg";

function LightGuide () {
  return(
    <div className="light">
      <div className="light__container">
        <h1 className="light__title">Lighting Guide</h1>
        <h3 className="light__heading">Don't know how to decipher lighting types? What's indirect but bright? Medium? Low? Let our tips help you decide.</h3>
        <div className="light__image-container">
          <img className="light__image" src={LightGuideImage} alt="drawing of lighting types"/>
          <h6 className="light__credit">Credit for the beautiful illustration goes to Leon George</h6>
        </div>
        <ul className="light__list">
          <li className="light__item">
            <h3 className="light__subheading">North Facing Windows</h3>
            <p className="light__details">Windows which face North never get sunlight coming through them... But if the window is facing North East, or North West you'll get some in the mornings or evenings especially during Summer.</p>
          </li>
          <li className="light__item">
            <h3 className="light__subheading">East Facing Windows</h3>
            <p className="light__details">The Sun rises in the East and therefore the East facing aspect gets the first weak rays of sunlight in the morning. Depending on the time of the year, direct sunlight has normally stopped shining through these windows by mid morning to midday.
            East facing windows receive very good light levels and natural sources of heat without either being extreme.</p>
          </li>
          <li className="light__item">
            <h3 className="light__subheading">South Facing Windows</h3>
            <p className="light__details"> The strongest rays from the sun flow through South facing windows during each day.
            Plants which demand full sun will thrive here, it provides optimum levels of light for photosynthesis, so growth can be pretty fast. Plants which prefer shady or a North facing aspect should only be put in this window during the Winter months when the sunlight is less intense.</p>
          </li>
          <li className="light__item">
            <h3 className="light__subheading">West Facing Windows</h3>
            <p className="light__details">As the afternoon rolls on, the sun will eventually start shinning through the West facing windows right up until the sun sets and darkness falls.
            Like the East facing aspect, the sunlight is weaker than it would be around midday, but because the ambient temperature by this point of the day is likely to already be quite warm, overheating in these places can be a problem. Making sure ventilation is good and that the light is indirect if your plants start showing signs of damage.</p>
          </li>

        </ul>

      </div>
    </div>
  )
}

export default LightGuide;