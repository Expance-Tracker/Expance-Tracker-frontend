import React from "react";
import css from "./LogoutModal.module.css";

export default function LogoutModal({ isOpen, onClose }) {
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
        alert("Помилка під час виходу.");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  //   if (!isOpen) return null;
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
          <button onClick={onClose} className={css.cancel_button}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
