import { closeDeleteModal } from "../../redux/transactions/deleteModalSlice";
import css from "./Delete.module.css";
import { useDispatch, useSelector } from "react-redux";

export default function DeleteModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.deleteModal.isDeleteModalOpen);

  if (!isOpen) return null;

  return (
    <div className={css.overlay} onClick={() => dispatch(closeDeleteModal())}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={css.title}>Delete transaction</h2>
        <p className={css.text}>
          Are you sure you want to delete this transaction?
        </p>
        <div className={css.buttons}>
          <button className={css.confirm}>Delete</button>
          <button
            className={css.cancel}
            onClick={() => dispatch(closeDeleteModal())}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
