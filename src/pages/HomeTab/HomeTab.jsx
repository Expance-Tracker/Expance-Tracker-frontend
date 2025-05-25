import TransactionsList from "../../components/Transactions/TransactionsList";
import styles from "./HomeTab.module.css";

const HomeTab = () => {
  return (
    <div className={styles.container}>
      <TransactionsList />
    </div>
  );
};

export default HomeTab;
