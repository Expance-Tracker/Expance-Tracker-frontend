import { useDispatch } from "react-redux";
import css from "./Transactions.module.css";
import { Pencil } from "lucide-react";
import { openDeleteModal } from "../../redux/transactions/deleteModalSlice";
import { useState } from "react";
import ModalEditTransaction from "../ModalEditTransaction/ModalEditTransaction";

const TransactionsItem = ({ transaction }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { _id, date, type, category, comment, sum } = transaction;

  return (
    <div className={`${css.card} ${type === "+" ? css.income : css.expense}`}>
      <div className={css.rowWrapper}>
        <div className={css.row}>
          <span className={css.leftSideSpan}>Date</span>
          <span className={css.rightSideSpan}>
            {new Date(date).toLocaleDateString("en-CA")}
          </span>
        </div>
      </div>
      <div className={css.rowWrapper}>
        <div className={css.row}>
          <span className={css.leftSideSpan}>Type</span>
          <span className={css.rightSideSpan}>{type}</span>
        </div>
      </div>
      <div className={css.rowWrapper}>
        <div className={css.row}>
          <span className={css.leftSideSpan}>Category</span>
          <span className={css.rightSideSpan}>{category}</span>
        </div>
      </div>
      <div className={css.rowWrapper}>
        <div className={css.row}>
          <span className={css.leftSideSpan}>Comment</span>
          <span className={css.rightSideSpan}>{comment || "-"}</span>
        </div>
      </div>
      <div className={css.rowWrapper}>
        <div className={css.row}>
          <span className={css.leftSideSpan}>Sum</span>
          <span className={css.rightSideSpan}>{sum}</span>
        </div>
      </div>
      <div className={css.divDeleteEdit}>
        <button
          className={css.delete}
          onClick={() => dispatch(openDeleteModal(_id))}
        >
          Delete
        </button>
        <button
          className={css.editButton}
          onClick={() => {
            setModalIsOpen(true);
          }}
        >
          <span className={css.editStaff}>
            <Pencil className={css.icon} />
          </span>
        </button>

        <span className={css.edit}>Edit</span>
      </div>
      {modalIsOpen && (
        <ModalEditTransaction
          onClose={() => {
            setModalIsOpen(false);
          }}
          transaction={transaction}
        />
      )}
    </div>
  );
};

export default TransactionsItem;
