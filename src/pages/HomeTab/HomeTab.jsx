import TransactionsList from "../../components/Transactions/TransactionsList";
import styles from "./HomeTab.module.css";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from "../../redux/global/globalSlice";

const HomeTab = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    const timer = setTimeout(() => dispatch(setLoading(false)), 2000);
    return () => clearTimeout(timer);
  }, [dispatch]); 

  return (
    <div className={styles.container}>
      <TransactionsList />
    </div>
  );
};

export default HomeTab;
