import css from "./LogoutModal.module.css";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeLogoutModal } from "../../redux/slices/headerModalSlice";
import { logout } from "../../redux/auth/operations";

export default function LogoutModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isLogoutModalOpen);
  const modalRef = useRef();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        dispatch(closeLogoutModal());
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch, isOpen]);

  // Close modal if click outside modal content
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      dispatch(closeLogoutModal());
    }
  };

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      localStorage.clear();
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout failed: " + error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={css.logout_modal_overlay} onClick={handleClickOutside}>
      <div className={css.logout_modal} ref={modalRef}>
        <div className={css.logo_modal}>
          <div className={css.icon_modal}></div>
          <h2 className={css.title_modal}> Spendy</h2>
        </div>
        <p className={css.text_modal}>Are you sure you want to log out?</p>
        <div className={css.modal_button}>
          <button onClick={handleLogout} className={css.logout_button}>
            {" "}
            Logout
          </button>
          <button
            onClick={() => dispatch(closeLogoutModal())}
            className={css.cancel_button}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
