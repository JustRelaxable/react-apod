import "../StyleModules/MenuHeader.css";
import nasaLogo from "../Assets/SVG/NASA_Worm_logo.svg";

export default function MenuHeader() {
  return (
    <div className="menu-header">
      <div className="logo-with-text">
        <img src={nasaLogo} alt="Nasa Worm Logo" className="header-logo" />
        <p className="logo-text">
          <span className="logo-seperator"> - </span>Astronomy Picture of the
          Day
        </p>
      </div>
      <div className="header-links">
        <a href="#">Choose Date</a>
        <a href="#">About APOD</a>
      </div>
    </div>
  );
}