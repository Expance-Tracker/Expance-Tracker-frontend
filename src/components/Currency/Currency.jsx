import { useEffect, useState } from 'react';

import bigWallet from '../../assets/Currency/wallet-big.webp';
import styles from './Currency.module.css'

const MONOBANK_API_URL = 'https://expance-tracker-backend-9zu7.onrender.com/rates';
const LOCAL_STORAGE_KEY = 'monobankCurrencyData';
const CACHE_DURATION_MS = 60 * 60 * 1000;

const Currency = () => {
  const [rates, setRates] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => { 
    const fetchRates = async () => {
      try {
        const cached = localStorage.getItem(LOCAL_STORAGE_KEY);
        const now = Date.now();

        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (now - timestamp < CACHE_DURATION_MS) {
            setRates(data);
            return;
          }
        }

        const response = await fetch(MONOBANK_API_URL);
        if (!response.ok) throw new Error('Error Api');

        const data = await response.json();
        localStorage.setItem(
          LOCAL_STORAGE_KEY,
          JSON.stringify({ data, timestamp: now })
        );
        setRates(data);
      } catch (err) {
        setError(err.message || 'Unknown error');
      }
    };

    fetchRates();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!rates) return <div>Loading...</div>;

  const filteredRates = rates.filter(
    rate =>
      (rate.currencyCodeA === 840 || rate.currencyCodeA === 978) &&
      rate.currencyCodeB === 980
  );

  return (
    <div className={styles.external_currency_box}>
    <div className={styles.currency_box}>
      <div className={styles.list_title}>
        <div className={styles.title}>Currency</div>
        <div className={styles.title}>Purchase</div>
        <div className={styles.title}>Sale</div>
      </div>

      {filteredRates.map(rate => (
        <div key={rate.currencyCodeA} className={styles.list_rates}>
          <div className={styles.rate}>{rate.currencyCodeA === 840 ? 'USD' : 'EUR'}</div>
          <div className={styles.rate}>{rate.rateBuy?.toFixed(2)}</div>
          <div className={styles.rate}>{rate.rateSell?.toFixed(2)}</div>
        </div>
      ))}
      </div>
      <img src={bigWallet} alt="wallet" className={styles.img_wallet} /></div>
  );
};

export default Currency;
