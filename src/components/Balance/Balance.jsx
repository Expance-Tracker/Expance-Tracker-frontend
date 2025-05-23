// src/components/Balance/Balance.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBalance } from '../../redux/slices/balanceSlice';
import styles from './Balance.module.css';

const Balance = () => {
  const dispatch = useDispatch();
  const { value: balance, loading, error } = useSelector((state) => state.balance);

  useEffect(() => {
    dispatch(fetchBalance());
  }, [dispatch]);

  const handleRefresh = () => {
    dispatch(fetchBalance());
  };

  return (
    <div className={styles['balance-card']}>
      <p className={styles['balance-label']}>YOUR BALANCE</p>

      {loading && <p className={styles['balance-loading']}>Loading...</p>}
      {error && <p className={styles['balance-error']}>Error: {error}</p>}
      {!loading && !error && (
        <h2 className={styles['balance-amount']}>{balance.toLocaleString()} UAH</h2>
      )}
    </div>
  );
};

export default Balance;
