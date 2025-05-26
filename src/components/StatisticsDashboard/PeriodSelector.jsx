import { useDispatch, useSelector } from 'react-redux';
import { setPeriod } from '../../redux/slices/statisticsSlice';
import { selectPeriod } from '../../redux/slices/statisticsSelectors';
import './PeriodSelector.css';
const months = [
  { name: 'January', value: '01' },
  { name: 'February', value: '02' },
  { name: 'March', value: '03' },
  { name: 'April', value: '04' },
  { name: 'May', value: '05' },
  { name: 'June', value: '06' },
  { name: 'July', value: '07' },
  { name: 'August', value: '08' },
  { name: 'September', value: '09' },
  { name: 'October', value: '10' },
  { name: 'November', value: '11' },
  { name: 'December', value: '12' },
];

const years = [2023, 2024, 2025];

const PeriodSelector = () => {
  const dispatch = useDispatch();
  const period = useSelector(selectPeriod);
  const [year, month] = period.split('-');

  const handleMonthChange = (e) => {
    dispatch(setPeriod(`${year}-${e.target.value}`));
  };

  const handleYearChange = (e) => {
    dispatch(setPeriod(`${e.target.value}-${month}`));
  };

  return (
    <div className="period-select-wrapper">
      <select value={month} onChange={handleMonthChange}>
        {months.map((m) => (
          <option key={m.value} value={m.value}>{m.name}</option>
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

export default PeriodSelector;
