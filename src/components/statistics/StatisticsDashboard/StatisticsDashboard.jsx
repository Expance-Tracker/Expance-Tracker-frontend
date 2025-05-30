import styles from "./StatisticsDashboard.module.css";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const years = [2022, 2023, 2024, 2025];

const StatisticsDashboard = ({ month, year, onMonthChange, onYearChange }) => (
  <div className={styles.dashboard}>
    <div className={styles.periodSelects}>
      <select
        value={month}
        onChange={(e) => onMonthChange(Number(e.target.value))}
        className={styles.select}
      >
        {months.map((m, idx) => (
          <option className={styles.selectedOption} value={idx + 1} key={m}>
            {m}
          </option>
        ))}
      </select>
      <select
        value={year}
        onChange={(e) => onYearChange(Number(e.target.value))}
        className={styles.select}
      >
        {years.map((y) => (
          <option className={styles.selectedOption} value={y} key={y}>
            {y}
          </option>
        ))}
      </select>
    </div>
  </div>
);

export default StatisticsDashboard;
