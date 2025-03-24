import { useState } from "react";
import logo from "../../assets/foodvilla.png";

const Header = () => {
  const [buttonValue, setButtonValue] = useState("Login");

  const handleButtonClick = () => {
    setButtonValue((prevValue) => (prevValue === "Login" ? "Logout" : "Login"));
  };

  return (
    <div className="header">
      <div>
        <img className="header-logo" src={logo} alt="logo" />
      </div>
      <div className="header-nav-items">
        <ul>
          <li>Contact</li>
          <li>Cart</li>
          <li>
            <button className="login-button" onClick={handleButtonClick}>
              {buttonValue}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
