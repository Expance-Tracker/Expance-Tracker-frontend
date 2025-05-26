import { useDispatch, useSelector } from "react-redux";
import styles from "./Transactions.module.css";
import TransactionsItem from "./TransactionsItem";
import { Pencil } from "lucide-react";
import { useEffect } from "react";
import { getTransactions } from "../../redux/transactions/operations";
import { openDeleteModal } from "../../redux/transactions/deleteModalSlice";

const TransactionsList = () => {
  const dispatch = useDispatch();

  const {
    items: transactions,
    isLoading,
    error
  } = useSelector((state) => state.transactions);

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  if (isLoading) return;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {/* Mobile View */}
      <div className={styles.mobileDiv}>
        <ul className={styles.transactionList}>
          {transactions.map((item) => (
            <TransactionsItem key={item._id} transaction={item} />
          ))}
        </ul>
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
            <div className={styles.buttonsHeader}></div>
          </div>

          {transactions.map((item) => (
            <div
              key={item._id}
              className={`${styles.row} ${
                item.type === "+" ? styles.incomeRow : styles.expenseRow
              }`}
            >
              <div className={`${styles.cellItems} ${styles.dataItems}`}>
                {new Date(item.date).toLocaleDateString("en-CA")}
              </div>

              <div className={`${styles.cellItems} ${styles.typeItems}`}>
                <span className={styles.typeBox}>{item.type}</span>
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
                {item.amount}
              </div>

              <div className={styles.buttons}>
                <button className={styles.editButtonTablet}>
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
          ))}
        </div>
      </div>
    </>
  );
};

export default TransactionsList;
