import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../../redux/slices/transactionsSlice';
import { selectType, selectPeriod } from '../../redux/slices/statisticsSelectors';
import StatisticsDashboard from '../../components/StatisticsDashboard/StatisticsDashboard';

const StatisticsTab = () => {
  const dispatch = useDispatch();
  const type = useSelector(selectType);
  const period = useSelector(selectPeriod);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch, period, type]);

  return (
    <div style={{ padding: '2rem', color: '#fff' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
        Statistics
      </h1>
      <StatisticsDashboard />
    </div>
  );
};

export default StatisticsTab;
    