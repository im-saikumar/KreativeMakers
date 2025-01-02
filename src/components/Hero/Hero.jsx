import "./Hero.css";
import { Link } from "react-router-dom";
import Scroll from "../UI/scroll";

function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <img
          className="heroImage"
          src="source/hero.png"
          alt="hero"
        />
        <div className="textLayout">
          <p className="heroText">
          Combining the experience of our designers in this field is more than impressive in <strong>5</strong> years, so we are able to offer you the best designs with the option of ordering them online & getting them done.
          </p>
          <Link to="explore">
            <button className="button">Explore More</button>
          </Link>
        </div>
      </div>
      <Scroll />
    </div>
  );
}

export default Hero;
