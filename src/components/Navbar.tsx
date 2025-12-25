import React from "react";
import logo from "../assets/nav-bar.svg"; // update path if needed

const Navbar = () => {
  return (
    <nav>
        <div>
        <img src={logo} alt="AI Lab Logo" />
        </div>
        <div>
          <ul className="Links">
            <li>Services</li>
            <li>Our Product</li>
            <li>About Us</li>
            <li>Team</li>
            <li>Contact Us</li>
          </ul>
        </div>
    </nav>
  );
};

export default Navbar;
