import { useSelector } from 'react-redux';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { selectSummaryByCategory } from '../../redux/slices/statisticsSelectors';
import './Chart.css';

const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#F67019'];

const Chart = () => {
  const summary = useSelector(selectSummaryByCategory);

  const data = Object.entries(summary).map(([category, value]) => ({
    name: category,
    value,
  }));

  return (
    <div className="chart-container">
      {data.length === 0 ? (
        <p className="no-data">No data to display</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default Chart;