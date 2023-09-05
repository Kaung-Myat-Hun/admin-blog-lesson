import React from "react";
import { sideMenuData } from "./data/sidemenuData";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";

function SideMenu() {
  return (
    <div>
      <ul className={styles.navLinkContainer}>
        {sideMenuData.map((menu, index) => (
          <li key={index}>
            <NavLink to={menu.route}>
              <img src={menu.logo} alt="" className={styles.logo} />
              {menu.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideMenu;
