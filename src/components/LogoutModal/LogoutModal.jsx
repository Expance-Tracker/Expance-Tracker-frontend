
import css from "./LogoutModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeLogoutModal } from "../../redux/slices/headerModalSlice";

export default function LogoutModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isLogoutModalOpen);
  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
        credentials: "include"
      });

      if (response.ok) {
        // Успішно вийшли можна редіректнути
        window.location.href = "/login";
      } else {
        alert("Error while logging out.");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={css.logout_modal_overlay}>
      <div className={css.logout_modal}>
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
