import { useDispatch, useSelector } from "react-redux";
import styles from "./Transactions.module.css";
import TransactionsItem from "./TransactionsItem";
import { Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import { getTransactions } from "../../redux/transactions/operations";
import { openDeleteModal } from "../../redux/transactions/deleteModalSlice";
import ModalEditTransaction from "../ModalEditTransaction/ModalEditTransaction";
import ButtonAddTransaction from "../ButtonAddTransaction/ButtonAddTransaction";

const TransactionsList = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [transactionItem, setTransactionItem] = useState([]);
  const dispatch = useDispatch();

  const {
    items: transactions,
    isLoading,
    error
  } = useSelector((state) => state.transactions);

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit"
    });
  };

  if (isLoading) return;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {/* Mobile View */}
      <div className={styles.mobileDiv}>
        {transactions.length === 0 ? (
          <p className={styles.noTransactions}>No transactions yet.</p>
        ) : (
          <div className={styles.transactionContainer}>
            <ul className={styles.transactionList}>
              {transactions.map((item) => (
                <TransactionsItem key={item._id} transaction={item} />
              ))}
            </ul>
            <div className={styles.buttonWrapper}>
              <ButtonAddTransaction />
            </div>
          </div>
        )}
      </div>
      {/* Tablet View */}
      <div className={styles.tablet}>
        <div className={styles.tableWrapper}>
          <div className={styles.headerRow}>
            <div className={`${styles.cell} ${styles.date}`}>Date</div>
            <div className={`${styles.cell} ${styles.type}`}>Type</div>
            <div className={`${styles.cell} ${styles.category}`}>Category</div>
            <div className={`${styles.cell} ${styles.comment}`}>Comment</div>
            <div className={`${styles.cell} ${styles.sum}`}>Sum</div>
          </div>

          {transactions.length === 0 ? (
            <div className={styles.noTransactionsTablet}>
              No transactions yet.
            </div>
          ) : (
            transactions.map((item) => (
              <div key={item._id} className={styles.row}>
                <div className={`${styles.cellItems} ${styles.dataItems}`}>
                  {formatDate(item.date)}
                </div>

                <div className={`${styles.cellItems} ${styles.typeItems}`}>
                  <span className={styles.typeBox}>
                    {item.type === "income" ? "+" : "-"}
                  </span>
                </div>

                <div className={`${styles.cellItems} ${styles.categoryItems}`}>
                  {item.category}
                </div>

                <div className={`${styles.cellItems} ${styles.commentItems}`}>
                  {item.comment || "-"}
                </div>

                <div
                  className={`${styles.cellItems} ${styles.sumItems} ${
                    item.type === "+" ? styles.sumgreen : styles.sumyellow
                  }`}
                >
                  {item.amount
                    .toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    })
                    .replace(/,/g, " ")}
                </div>

                <div className={styles.buttons}>
                  <button
                    onClick={() => {
                      setModalIsOpen(true);
                      setTransactionItem(item);
                    }}
                    className={styles.editButtonTablet}
                  >
                    <Pencil className={styles.icon} />
                  </button>
                  <button
                    className={styles.deleteTablet}
                    onClick={() => dispatch(openDeleteModal(item._id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
          {modalIsOpen && (
            <ModalEditTransaction
              onClose={() => {
                setModalIsOpen(false);
              }}
              transaction={transactionItem}
            />
          )}
        </div>
        <ButtonAddTransaction />
      </div>
    </>
  );
};

export default TransactionsList;
