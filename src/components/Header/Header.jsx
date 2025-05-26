import css from "./Header.module.css";
import { PiLineVerticalThin } from "react-icons/pi";
import { IoExitOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { openLogoutModal } from "../../redux/slices/headerModalSlice";
import { selectName } from "../../redux/auth/selectors";

export default function Header() {
  const name = useSelector(selectName);
  const dispatch = useDispatch();

  return (
    <header className={css.header}>
      <div className={css.headerLogo}>
        <img
          src="/src/assets/register/reg_logo.webp"
          width={30.9}
          height={30.9}
          alt="Logo Image"
        />
        <p className={css.headerLogoName}>Spendy</p>
      </div>

      <div className={css.headerUserInfo}>
        <p className={css.headerUsername}>{name}</p>
        <PiLineVerticalThin size="30" strokeWidth="1" />
        <button
          className={css.headerButtonStyle}
          onClick={() => dispatch(openLogoutModal())}
        >
          <IoExitOutline size="17.99" strokeWidth="1" />
          Exit
        </button>
      </div>
    </header>
  );
}
