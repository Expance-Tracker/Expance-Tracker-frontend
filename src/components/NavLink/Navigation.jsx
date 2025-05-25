import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigationContainer}>
      <ul className={styles.navList}>
        <li>
          <NavLink 
            to="/" 
            end 
            className={({ isActive }) => 
              isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/statistics" 
            className={({ isActive }) => 
              isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
            }
          >
            Statistics
          </NavLink>
        </li>
        <li className={styles.currencyTab}>
          <NavLink 
            to="/currency" 
            className={({ isActive }) => 
              isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
            }
          >
            Currency
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;