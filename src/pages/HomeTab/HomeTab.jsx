import TransactionsList from "../../components/Transactions/TransactionsList";
import styles from "./HomeTab.module.css";
import { setLoading } from "../../redux/global/globalSlice"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const HomeTab = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    setTimeout(() => dispatch(setLoading(false)), 3000);
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <TransactionsList />
    </div>
  );
};

export default HomeTab;
