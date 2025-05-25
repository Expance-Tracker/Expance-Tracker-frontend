import { NavLink } from 'react-router-dom';
import { HomeIcon, StatsIcon, CurrencyIcon } from '../Svg/SvgNavi';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigationContainer}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink 
            to="/" 
            end 
            className={({isActive}) => isActive ? 
              `${styles.navLink} ${styles.navLinkActive}` : styles.navLink}
          >
            <div className={styles.navIcon}>
              <HomeIcon width={18} height={18} style={{ display: 'block' }} />
            </div>
            <span>Home</span>
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink 
            to="/statistics" 
            className={({isActive}) => isActive ? 
              `${styles.navLink} ${styles.navLinkActive}` : styles.navLink}
          >
            <div className={styles.navIcon}>
              <StatsIcon width={18} height={18} style={{ display: 'block' }} />
            </div>
            <span>Statistics</span>
          </NavLink>
        </li>
        <li className={`${styles.navItem} ${styles.currencyTab}`}>
          <NavLink 
            to="/currency" 
            className={({isActive}) => isActive ? 
              `${styles.navLink} ${styles.navLinkActive}` : styles.navLink}
          >
            <div className={styles.navIcon}>
              <CurrencyIcon width={18} height={18} style={{ display: 'block' }} />
            </div>
            <span>Currency</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;