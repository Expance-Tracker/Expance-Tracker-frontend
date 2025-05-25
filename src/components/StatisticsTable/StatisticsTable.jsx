import { useSelector } from 'react-redux';
import {
  selectSummaryByCategory,
  selectType
} from '../../redux/slices/statisticsSelectors';
import './StatisticsTable.css';

const StatisticsTable = () => {
  const summary = useSelector(selectSummaryByCategory);
  const type = useSelector(selectType);

  const total = Object.values(summary).reduce((acc, val) => acc + val, 0);

  return (
    <div className="table-container">
      {Object.entries(summary).length === 0 ? (
        <p className="no-data">No data for this period</p>
      ) : (
        <>
          <table className="statistics-table">
            <thead>
              <tr>
                <th>Category</th>
                <th className="right">Sum</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(summary).map(([category, amount]) => (
                <tr key={category}>
                  <td>{category}</td>
                  <td className="right">{amount.toFixed(2)} ₴</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={`statistics-total ${type}`}>
            {type === 'expense'
              ? `Expense: ${total.toFixed(2)} ₴`
              : `Income: ${total.toFixed(2)} ₴`}
          </div>
        </>
      )}
    </div>
  );
};

export default StatisticsTable;