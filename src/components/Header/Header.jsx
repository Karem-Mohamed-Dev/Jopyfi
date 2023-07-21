import React, { useState } from "react";

import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import auth from "../../context/auth";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const ctx = useContext(auth);
  const [showMenu, setShowMenu] = useState(false);

  function menuHandler() {
    setShowMenu((state) => (state = !state));
  }
  return (
    <header className={classes.header}>
      <div className={classes.content}>
        <div className={classes.logo}>
          <img src="images/logo.png" width="100px" alt="" />
        </div>
        <nav>
          <FiMenu onClick={menuHandler} className={classes.icon} />
          <ul className={showMenu ? classes.showMenu : null}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? classes.active : null)}
                onClick={() => setShowMenu(false)}
              >
                Find Jop
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="companys"
                className={({ isActive }) => (isActive ? classes.active : null)}
                onClick={() => setShowMenu(false)}
              >
                Copmanys
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="profile"
                className={({ isActive }) => (isActive ? classes.active : null)}
                onClick={() => setShowMenu(false)}
              >
                My Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="savedjops"
                className={({ isActive }) => (isActive ? classes.active : null)}
                onClick={() => setShowMenu(false)}
              >
                Saved Jops
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={classes.profile}>
          <img src="images/me.jpg" width="20px" alt="user Pic" />
          <div className={classes.details}>
            <p>Karim</p>
            <span>Front End</span>
          </div>
        </div>
        {!ctx.isLogedIn && <button>Login</button>}
      </div>
    </header>
  );
};

export default Header;
