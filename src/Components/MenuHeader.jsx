import "../StyleModules/MenuHeader.css";
import nasaLogo from "../Assets/SVG/NASA_Worm_logo.svg";
import NasaLogo from "./NasaLogo";
import { Link } from "react-router-dom";
import BurgerMenuButton from "./BurgerMenuButton";

export default function MenuHeader() {
  return (
    <div className="menu-header">
      <Link to="/">
        <div className="logo-with-text">
          <NasaLogo className="header-logo"></NasaLogo>
          <p className="logo-text">
            <span className="logo-seperator"> - </span>Astronomy Picture of the
            Day
          </p>
        </div>
      </Link>

      <div className="header-links-desktop">
        <a href="#">Choose Date</a>
        <Link to="/about">About APOD</Link>
      </div>
      <div className="header-burger-menu">
        <BurgerMenuButton></BurgerMenuButton>
      </div>
    </div>
  );
}
