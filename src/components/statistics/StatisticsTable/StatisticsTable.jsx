import React from "react";
import styles from "./StatisticsTable.module.css";

const StatisticsTable = ({ type, data = [] }) => {
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
        {categories.map((item) => (
          <li className={styles.tableRow} key={item.category}>
            <span className={styles.catInfo}>
              <span
                className={styles.colorDot}
                style={{ background: item.color || "#ffd600" }}
              />
              {item.category}
            </span>
            <span className={styles.catAmount}>
              {(item.total || 0).toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </li>
        ))}
      </ul>
      <div className={styles.tableFooter}>
        <span>Total</span>
        <span>
          {total.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      </div>
    </div>
  );
};

export default StatisticsTable;