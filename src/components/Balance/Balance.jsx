import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { fetchBalance } from "../../redux/slices/balanceSlice";
import { logout } from "../../redux/auth/operations";
import styles from "./Balance.module.css";

const Balance = ({ className = "" }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { value: balance, error } = useSelector((state) => state.balance);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const checkBalance = async () => {
      const resultAction = await dispatch(fetchBalance());

      if (fetchBalance.fulfilled.match(resultAction)) {
      }

      if (initialLoading) setInitialLoading(false);
    };

    checkBalance();

    const interval = setInterval(() => {
      dispatch(fetchBalance());
    }, 300000); // 5 хвилин

    return () => clearInterval(interval);
  }, [dispatch, initialLoading]);

  useEffect(() => {
    if (error && error.status === 401) {
      dispatch(logout()).then(() => {
        navigate("/login");
        window.location.reload();
      });
    }
  }, [error, dispatch, navigate]);

  return (
    <div className={`${styles["balance-card"]} ${className}`}>
      <p className={styles["balance-label"]}>YOUR BALANCE</p>

      {initialLoading && (
        <p className={styles["balance-loading"]}>Loading...</p>
      )}

      {!initialLoading && !error && (
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
