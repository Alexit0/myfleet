import React from "react";
import { Link, NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="trucks"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              TRUCKS
            </NavLink>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
