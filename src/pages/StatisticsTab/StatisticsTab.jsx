import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../../redux/slices/transactionsSlice';
import { selectType, selectPeriod } from '../../redux/slices/statisticsSelectors';
import Toggle from '../../components/Toggle/Toggle';
import StatisticsDashboard from '../../components/StatisticsDashboard/StatisticsDashboard';
import Chart from '../../components/Chart/Chart';
import StatisticsTable from '../../components/StatisticsTable/StatisticsTable';
const StatisticsTab = () => {
  const dispatch = useDispatch();
  const type = useSelector(selectType);
  const period = useSelector(selectPeriod);

  // 🔁 Завантажуємо дані при кожній зміні періоду або типу
  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch, period, type]);

  return (
    <div className="statistics-tab" style={{ padding: '2rem', color: '#fff' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
        Statistics
      </h1>
  
      {/* 🔘 Toggle: перемикач "Income / Expense" */}
      <div style={{ marginBottom: '1.5rem' }}>
        <Toggle />
      </div>
  
      {/* 📅 Вибір місяця та року */}
      <StatisticsDashboard />
  
      {/* 📊 Кругова діаграма */}
      <Chart />
  
      {/* 📋 Таблиця категорій */}
      <StatisticsTable />
    </div>
  );
};

export default StatisticsTab;
    