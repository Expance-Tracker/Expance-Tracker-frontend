import { useDispatch, useSelector } from "react-redux";
import { deleteTransaction } from "../../redux/transactions/operations";
import { closeDeleteModal } from "../../redux/transactions/deleteModalSlice";
import styles from "./Delete.module.css";
import { X } from "lucide-react";

const DeleteModal = () => {
  const dispatch = useDispatch();
  const { isDeleteModalOpen, transactionId } = useSelector(
    (state) => state.deleteModal
  );

  if (!isDeleteModalOpen) return null;

  const handleDelete = async () => {
    await dispatch(deleteTransaction(transactionId));
    dispatch(closeDeleteModal());
  };

  const handleCancel = () => {
    dispatch(closeDeleteModal());
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={handleCancel}>
          <X size={24} />
        </button>

        <div className={styles.logo_modal}>
          <div className={styles.icon_modal}></div>
          <h2 className={styles.title_modal}>Spendy</h2>
        </div>

        <p className={styles.text_modal}>Are you sure you want to Delete?</p>

        <div className={styles.modal_button}>
          <button className={styles.delete} onClick={handleDelete}>
            Delete
          </button>
          <button className={styles.cancel} onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
