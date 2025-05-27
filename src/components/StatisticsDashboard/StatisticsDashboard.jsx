import { useDispatch, useSelector } from 'react-redux';
import { setPeriod } from '../../redux/slices/statisticsSlice';
import { selectPeriod } from '../../redux/slices/statisticsSelectors';
import './StatisticsDashboard.css';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const years = [2023, 2024, 2025];

const StatisticsDashboard = () => {
  const dispatch = useDispatch();
  const period = useSelector(selectPeriod);
  const [year, month] = period.split('-');
  const monthName = months[+month - 1];

  const handleMonthChange = (e) => {
    const newMonth = String(months.indexOf(e.target.value) + 1).padStart(2, '0');
    dispatch(setPeriod(`${year}-${newMonth}`));
  };

  const handleYearChange = (e) => {
    dispatch(setPeriod(`${e.target.value}-${month}`));
  };

  return (
    <div className="period-select-wrapper">
      <select value={monthName} onChange={handleMonthChange}>
        {months.map((m) => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>

      <select value={year} onChange={handleYearChange}>
        {years.map((y) => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>
    </div>
  );
};

export default StatisticsDashboard;