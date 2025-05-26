import Balance from "../../components/Balance/Balance";
import Currency from "../../components/Currency/Currency";
import Navigation from "../../components/NavLink/Navigation";
import TransactionsList from "../../components/Transactions/TransactionsList";
import { setLoading } from "../../redux/global/globalSlice";
import styles from "./HomeTab.module.css";

import { setLoading } from "../../redux/global/globalSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../../redux/slices/categoriesSlice";
import ButtonAddTransaction from "../../components/ButtonAddTransaction/ButtonAddTransaction";


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
        <div className={styles.box_navigation_balance}>
          <Navigation />
          <Balance className={styles.balance} />
        </div>
        <Currency />
      </div>
      <TransactionsList />
      <ButtonAddTransaction />
    </div>
  );
};

export default HomeTab;
