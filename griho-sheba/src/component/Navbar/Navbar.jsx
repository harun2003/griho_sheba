import './navbar.css';
import { assets } from './../../assets/assets';
import { useState } from 'react';

const Navbar = ({ setShowLogin, setIsSignUp }) => {
  const [menu, setMenu] = useState("home");

  const handleSignIn = () => {
    setIsSignUp(false); // Always default to showing the login popup
    setShowLogin(true); // Show the popup when clicked
  };

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="logo" className="logo" />
      <ul className="navbar-menu">
        <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
        <li onClick={() => setMenu("services")} className={menu === "services" ? "active" : ""}>Services</li>
        <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</li>
        <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search icon" />
        <div className="navbar-search-icon">
          <img src={assets.location_icon} alt="location icon" />
          <div className="dot"></div>
        </div>
        <button onClick={handleSignIn}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
