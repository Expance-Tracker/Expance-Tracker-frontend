import React from "react";
import styles from "./StatisticsTable.module.css";

const StatisticsTable = ({ data = [] }) => {
  const total = data.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className={styles.tableBlock}>
      <div className={styles.tableHeader}>
        <span>Category</span>
        <span>Sum</span>
      </div>
      <ul className={styles.tableList}>
        {data.map((item) => (
          <li className={styles.tableRow} key={item.category}>
            <span className={styles.catInfo}>
              <span
                className={styles.colorDot}
                style={{ background: item.color || "#ffd600" }}
              />
              {item.category}
            </span>
            <span className={styles.catAmount}>
              {item.amount.toLocaleString("en-US", {
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