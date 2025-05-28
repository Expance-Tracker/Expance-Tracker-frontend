import styles from "./Toggle.module.css";

const Toggle = ({ type, setType }) => {
  const isIncome = type === "income";

  return (
    <div className={styles.toggleWrapper}>
      <span className={isIncome ? styles.activeLabel : styles.inactiveLabel}>
        Income
      </span>
      <button
        className={`${styles.toggle} ${isIncome ? styles.left : styles.right}`}
        onClick={() => setType(isIncome ? "expense" : "income")}
        type="button"
        aria-label="Toggle income/expense"
      >
        <span
          className={`${styles.icon} ${
            isIncome ? styles.incomeIcon : styles.expenseIcon
          }`}
        >
          {isIncome ? "+" : "−"}
        </span>
      </button>
      <span className={!isIncome ? styles.activeLabel : styles.inactiveLabel}>
        Expense
      </span>
    </div>
  );
};

export default Toggle;
