import { FaPhoneAlt, FaShoppingCart } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import logo from "../../assets/foodvilla.png";
import { useState } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Header = () => {
  const [user, setUser] = useState(null);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="header flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <Link to="/">
          <img className="header-logo w-32" src={logo} alt="Food Villa Logo" />
        </Link>
      </div>

      <nav className="header-nav-items">
        <ul className="flex items-center gap-6">
          <li>
            <Link
              to="/contact"
              className="text-black hover:text-orange-500 transition-colors"
            >
              <FaPhoneAlt size={18} />
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/cart"
              className="text-black hover:text-orange-500 transition-colors"
            >
              <FaShoppingCart size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>
          <li>
            {user ? (
              <button
                onClick={() => {
                  googleLogout();
                  setUser(null);
                }}
                className="text-black hover:text-orange-500 transition-colors"
              >
                <BiLogOut size={18} />
              </button>
            ) : (
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  const decoded = jwtDecode(credentialResponse.credential);
                  console.log("User Info:", decoded);
                  setUser(decoded);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
