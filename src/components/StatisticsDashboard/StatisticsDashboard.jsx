
import Toggle from '../Toggle/Toggle';
import Chart from '../Chart/Chart';
import PeriodSelector from './PeriodSelector';
import StatisticsTable from '../StatisticsTable/StatisticsTable';
import './StatisticsDashboard.css';


    export default function StatisticsDashboard() {
      return (
        <section className="statistics-dashboard">
  <div className="statistics-dashboard__top-bar">
    <div className="statistics-dashboard__toggle-wrapper">
      <Toggle />
    </div>
    <div className="statistics-dashboard__period-wrapper">
      <PeriodSelector />
    </div>
  </div>

  <div className="statistics-dashboard__content">
    <div className="statistics-dashboard__chart">
      <Chart />
    </div>
    <div className="statistics-dashboard__table">
      <StatisticsTable />
            </div>
            
  </div>
</section>
      );
    }

