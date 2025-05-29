import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchBalance } from "../../redux/slices/balanceSlice";
import styles from "./Balance.module.css";

const Balance = ({ className = "" }) => {
  const dispatch = useDispatch();
  const {
    value: balance,
    loading,
    error
  } = useSelector((state) => state.balance);

  useEffect(() => {
    dispatch(fetchBalance());
  }, [dispatch]);

  return (
    <div className={`${styles["balance-card"]} ${className}`}>
      <p className={styles["balance-label"]}>YOUR BALANCE</p>

      {loading && <p className={styles["balance-loading"]}></p>}
      {error && <p className={styles["balance-error"]}>Error: {error}</p>}
      {!loading && !error && (
        <h2 className={styles["balance-amount"]}>
          {balance
            .toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })
            .replace(/,/g, " ")}{" "}
          UAH
        </h2>
      )}
    </div>
  );
};

export default Balance;
