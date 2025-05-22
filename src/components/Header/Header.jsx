import css from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { PiLineVerticalThin } from "react-icons/pi";
import { IoExitOutline } from "react-icons/io5";

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.headerLogo}>
        <img
          src="/src/assets/register/reg_logo.png"
          width={30.9}
          height={30.9}
          alt="Logo Image"
        />
        <p className={css.headerLogoName}>Spendy</p>
      </div>

      <div className={css.headerUserInfo}>
        <p className={css.headerUsername}>Name</p>
        <PiLineVerticalThin size="30" strokeWidth="1" />
        <NavLink to="/" className={css.headerLinkStyle}>
          <IoExitOutline size="17.99" strokeWidth="1" />
          Exit
        </NavLink>
      </div>
    </header>
  );
}
