import { useEffect, useState } from "react";
import s from "./ModalEditTransaction.module.css";
import { TfiClose } from "react-icons/tfi";
import EditTransactionForm from "../EditTransactionForm/EditTransactionForm";

const ModalEditTransaction = ({ onClose, transaction }) => {
  const [isBackdropVisible, setIsBackdropVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsBackdropVisible(true);
    }, 10);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <div
        className={`${s.backdrop} ${
          isBackdropVisible ? s.backdropVisible : ""
        }`}
        onClick={handleBackdropClick}
      ></div>
      <div className={`${s.modal} ${isBackdropVisible ? s.modalVisible : ""}`}>
        <button className={s.closeBtn} onClick={onClose} type="button">
          <TfiClose className={s.closeIcon} />
        </button>
        <h3 className={s.title}>Edit transaction</h3>
        <EditTransactionForm onClose={onClose} transaction={transaction} />
      </div>
    </>
  );
};

export default ModalEditTransaction;
