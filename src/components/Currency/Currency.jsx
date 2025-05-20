import React, { useEffect, useState } from 'react';

const MONOBANK_API_URL = 'https://api.monobank.ua/bank/currency';
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
    <div>
      <div>
        <div>Currency</div>
        <div>Purchase</div>
        <div>Sale</div>
      </div>

      {filteredRates.map(rate => (
        <div key={rate.currencyCodeA}>
          <div>{rate.currencyCodeA === 840 ? 'USD' : 'EUR'}</div>
          <div>{rate.rateBuy?.toFixed(2)}</div>
          <div>{rate.rateSell?.toFixed(2)}</div>
        </div>
      ))}
    </div>
  );
};

export default Currency;
