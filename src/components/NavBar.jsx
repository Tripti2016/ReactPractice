import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import logoImg1 from '../assets/images/logo.svg';
import logoImg2 from '../assets/images/logo-blk.svg'


const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    return (
        <div className={isSticky ? 'sticky' :'navBar'  } >
            <div className="container">
                <div className="navBar-otr">
                    <Link to="../Home.jsx" className="logo-area">
                        <img className="logo-wh" src={logoImg1} alt="" />
                        <img className="logo-blk" src={logoImg2} alt="" />
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul></div>
        </div>
    );
}
export default Navbar;