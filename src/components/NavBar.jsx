import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logoImg1 from "../assets/images/logo.svg";
import logoImg2 from "../assets/images/logo-blk.svg";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const navLinksStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <div className={isSticky ? "sticky" : "navBar"}>
      <div className="container">
      <div className="scroll-watcher"></div>
        {/* <div className="navBar-otr">
          <Link to="../Home.jsx" className="logo-area">
            <img className="logo-wh" src={logoImg1} alt="" />
            <img className="logo-blk" src={logoImg2} alt="" />
          </Link>
        </div>
        <ul>
          <li>
            <NavLink style={navLinksStyles} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinksStyles} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinksStyles} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul> */}
      </div>
    </div>
  );
};
export default Navbar;
