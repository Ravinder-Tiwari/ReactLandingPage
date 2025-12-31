import CenterText from "./Center";
import heroimg from "../assets/bg.png";

const Section = () => {
  return (
    <div className="section">
      <CenterText />
      <img src={heroimg} alt="background" id="imageHero"/>
    </div>
  );
};

export default Section;
