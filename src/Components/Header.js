import { useState } from "react";
import { FaPhoneAlt, FaCartArrowDown } from "react-icons/fa";
import { GrLogin } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router";
import logo from "../../assets/foodvilla.png";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleButtonClick = () => {
    setIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
  };

  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prevCartCount) => prevCartCount + 1);
  };

  return (
    <div className="header">
      <div>
        <Link to="/">
          <img className="header-logo" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="header-nav-items">
        <ul>
          <li>
            <Link to="/contact">
              <FaPhoneAlt alt="Phone" style={{ color: "black" }} />
            </Link>
          </li>
          <li>
            <div className="cart-icon" onClick={handleAddToCart}>
              <Link>
                <FaCartArrowDown alt="Cart" style={{ color: "black" }} />
              </Link>
              {cartCount > 0 && (
                <span className="cart-count-badge">{cartCount}</span>
              )}
            </div>
          </li>
          <li>
            <button className="login-button" onClick={handleButtonClick}>
              {isLoggedIn ? <BiLogOut alt="Logout" /> : <GrLogin alt="Login" />}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
