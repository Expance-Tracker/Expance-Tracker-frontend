// import { CurrencyIcon, HomeIcon, StatsIcon } from "../Icons/Icons";

import Icon from "../Icon/Icon";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigationContainer}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.navLinkActive}`
                : styles.navLink
            }
          >
            <div className={styles.navIcon}>
              <Icon
                name={"icon-home"}
                className={styles.icon_svg}
                disableDefaultSize={true}
              />
            </div>
            <span>Home</span>
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/statistics"
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.navLinkActive}`
                : styles.navLink
            }
          >
            <div className={styles.navIcon}>
              <Icon
                name={"icon-stats-icon"}
                disableDefaultSize={true}
                className={styles.icon_svg}
              />
            </div>
            <span>Statistics</span>
          </NavLink>
        </li>
        <li className={`${styles.navItem} ${styles.currencyTab}`}>
          <NavLink
            to="/currency"
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.navLinkActive}`
                : styles.navLink
            }
          >
            <div className={styles.navIcon}>
              <Icon
                name={"currency-icon"}
                className={styles.icon_svg}
                disableDefaultSize={true}
              />
            </div>
            <span>Currency</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
