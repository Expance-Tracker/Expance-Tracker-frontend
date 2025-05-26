import { useDispatch, useSelector } from 'react-redux';
import { setType } from '../../redux/slices/statisticsSlice';
import { selectType } from '../../redux/slices/statisticsSelectors';
import './Toggle.css';

const Toggle = () => {
  const dispatch = useDispatch();
  const type = useSelector(selectType);

  const handleToggle = () => {
    const nextType = type === 'expense' ? 'income' : 'expense';
    dispatch(setType(nextType));
  };

  const isIncome = type === 'income';

  return (
    <div className="toggle-container">
      <span className={`toggle-label ${isIncome ? 'active' : ''}`}>Income</span>

      <div onClick={handleToggle} className="toggle-switch">
        <div className={`toggle-thumb ${isIncome ? 'income' : 'expense'}`}>
          {isIncome ? '+' : '−'}
        </div>
      </div>

      <span className={`toggle-label ${!isIncome ? 'active' : ''}`}>Expense</span>
    </div>
  );
};

export default Toggle;