import Balance from "../../components/Balance/Balance";
import Currency from "../../components/Currency/Currency";
import Navigation from "../../components/NavLink/Navigation";
import TransactionsList from "../../components/Transactions/TransactionsList";
import { fetchCategories } from "../../redux/slices/categoriesSlice";
import { setLoading } from "../../redux/global/globalSlice";
import styles from "./HomeTab.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const HomeTab = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    setTimeout(() => dispatch(setLoading(false)), 3000);

    //Отримання категорій
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.box_without_transaction}>
        <div className={styles.without_transaction_list}>
          <div className={styles.box_navigation_balance}>
            <Navigation />
            <div className={styles.balance_deskopt}>
              <Balance />
            </div>
          </div>
          <div className={styles.currency_mobile}>
            <Currency />
          </div>
        </div>
      </div>
      <div className={styles.transactionsList_only_tablet}>
        <TransactionsList />
      </div>
    </div>
  );
};

export default HomeTab;
