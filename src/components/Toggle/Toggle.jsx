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

  return (
    <div className="toggle-wrapper">
      <span className={type === 'income' ? 'active-label' : ''}>Income</span>
      <div className={`toggle-switch ${type}`} onClick={handleToggle}>
        <div className="toggle-thumb" />
      </div>
      <span className={type === 'expense' ? 'active-label' : ''}>Expense</span>
    </div>
  );
};

export default Toggle;