import { AiOutlinePlus } from "react-icons/ai";
import s from "./ButtonAddTransaction.module.css";
import ModalAddTransaction from "../ModalAddTransaction/ModalAddTransaction";
import { useState } from "react";

const ButtonAddTransaction = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setModalIsOpen(true);
        }}
        className={s.addBtn}
        type="button"
      >
        <AiOutlinePlus className={s.plusIcon} />
      </button>

      {modalIsOpen && (
        <ModalAddTransaction onClose={() => setModalIsOpen(false)} />
      )}
    </div>
  );
};

export default ButtonAddTransaction;
