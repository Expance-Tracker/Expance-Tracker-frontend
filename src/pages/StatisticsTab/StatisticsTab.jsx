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
import { useDispatch } from 'react-redux';
import { setLoading } from "../../redux/global/globalSlice";

const StatisticsTab = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    const timer = setTimeout(() => dispatch(setLoading(false)), 2000);
    return () => clearTimeout(timer);
  }, [dispatch]); 
  
    return (
        <>
        </>
    ) 
}; 
export default StatisticsTab

