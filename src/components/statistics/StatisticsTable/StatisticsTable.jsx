import styles from "./StatisticsTable.module.css";

const StatisticsTable = ({ type, data = [] }) => {
  const COLORS = [
    "#dfad3f",
    "#ffd8d0",
    "#fd9498",
    "#c5baff",
    "#6e78e8",
    "#4a56e2",
    "#81e1ff",
    "#24cca7",
    "#00ad84",
    "#43A047",
    "#FDD835"
  ];

  const filtered = data.find((item) => item.type === type);

  // Якщо такого типу нема — повертаємо заглушку
  if (!filtered) {
    return (
      <div className={styles.tableBlock}>
        <div className={styles.tableHeader}>
          <span>Category</span>
          <span>Sum</span>
        </div>
        <ul className={styles.tableList}>
          <li className={styles.tableRow}>
            <span className={styles.catInfo}>No data</span>
            <span className={styles.catAmount}>0.00</span>
          </li>
        </ul>
        <div className={styles.tableFooter}>
          <span>Total</span>
          <span>0.00</span>
        </div>
      </div>
    );
  }

  const total = filtered.totalAmount || 0;
  const categories = filtered.categories || [];

  return (
    <div className={styles.tableBlock}>
      <div className={styles.tableHeader}>
        <span>Category</span>
        <span>Sum</span>
      </div>
      <ul className={styles.tableList}>
        {categories.map((item, idx) => (
          <li className={styles.tableRow} key={item.category}>
            <span className={styles.catInfo}>
              <span
                className={styles.colorDot}
                style={{ background: COLORS[idx] }}
              />
              {item.category}
            </span>
            <span className={styles.catAmount}>
              {(item.total || 0)
                .toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })
                .replace(/,/g, " ")}
            </span>
          </li>
        ))}
      </ul>
      <div className={styles.tableFooter}>
        {filtered.type === "income" ? (
          <span className={styles.totalType}>Income:</span>
        ) : (
          <span className={styles.totalType}>Expenses:</span>
        )}

        <span
          className={
            filtered.type === "income"
              ? styles.incomeAmount
              : styles.expenseAmount
          }
        >
          {total
            .toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })
            .replace(/,/g, " ")}
        </span>
      </div>
    </div>
  );
};

export default StatisticsTable;
