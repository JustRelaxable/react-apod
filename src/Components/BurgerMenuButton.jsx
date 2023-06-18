import { Link } from "react-router-dom";
import "../StyleModules/BurgerMenuButton.css";
import { useState } from "react";

export default function BurgerMenuButton({ datePickerRef }) {
  const [menuActive, setMenuActive] = useState(false);
  const switchMenuActive = () => {
    setMenuActive((x) => !x);
  };
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 448 512"
        className="burger-menu-icon"
        onClick={switchMenuActive}
      >
        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
      </svg>
      {menuActive && (
        <div className="menu-container">
          <Link to="/" onClick={switchMenuActive}>
            Home
          </Link>
          <Link to="/about" onClick={switchMenuActive}>
            About
          </Link>
        </div>
      )}
    </>
  );
}
