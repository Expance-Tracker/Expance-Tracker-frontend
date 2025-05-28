import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setType,
  setMonth,
  setYear,
} from "../../redux/statistics/statisticsSlice";
import { fetchStatistics } from "../../redux/Statistics/operations";
import StatisticsDashboard from "../../components/Statistics/StatisticsDashboard/StatisticsDashboard";
import Toggle from "../../components/Statistics/Toggle/Toggle";
import Chart from "../../components/Statistics/Chart/Chart";
import StatisticsTable from "../../components/Statistics/StatisticsTable/StatisticsTable";
import styles from "./StatisticsTab.module.css";
import Currency from '../../components/Currency/Currency';
import Navigation from '../../components/NavLink/Navigation';
import { setLoading } from "../../redux/global/globalSlice";
import Balance from "../../components/Balance/Balance";

const StatisticsTab = () => {
  const dispatch = useDispatch();
  const { data, isLoading, type, month, year, error } = useSelector(
    (state) => state.statistics
  );

  useEffect(() => {
    dispatch(setLoading(true));
    const timer = setTimeout(() => dispatch(setLoading(false)), 2000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchStatistics({ type, month, year }));
  }, [dispatch, type, month, year]);

  return (
    <div className={styles.container}>
      <div className={styles.box_without_chart}>
        <div className={styles.without_chart_content}>
          <div className={styles.box_navigation_balance}>
          
              <Navigation />
              <div className={styles.balance_deskopt}>
                <Balance />
              </div>
            </div>
              <div className={styles.currency_mobile}>
              <Currency />
            
          </div>
        </div>
      </div>
      
      <div className={styles.statisticsSection}>
        <section className={styles.statisticsContainer}>
          <div className={styles.chartSide}>
            <Toggle type={type} setType={(v) => dispatch(setType(v))} />
            <Chart type={type} data={data} isLoading={isLoading} />
          </div>
          <div className={styles.statsSide}>
            <StatisticsDashboard
              month={month}
              year={year}
              onMonthChange={(v) => dispatch(setMonth(v))}
              onYearChange={(v) => dispatch(setYear(v))}
            />
            {error && <div style={{ color: "red" }}>{error}</div>}
            <StatisticsTable type={type} data={data} isLoading={isLoading} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default StatisticsTab;