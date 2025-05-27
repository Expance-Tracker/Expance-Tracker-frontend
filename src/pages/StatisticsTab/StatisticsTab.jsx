import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setType,
  setMonth,
  setYear,
} from "../../redux/statistics/statisticsSlice";
import { fetchStatistics } from "../../redux/statistics/operations";
import StatisticsDashboard from "../../components/statistics/StatisticsDashboard/StatisticsDashboard";
import Toggle from "../../components/statistics/Toggle/Toggle";
import Chart from "../../components/statistics/Chart/Chart";
import StatisticsTable from "../../components/statistics/StatisticsTable/StatisticsTable";
import styles from "./StatisticsTab.module.css";

const StatisticsTab = () => {
  const dispatch = useDispatch();
  const { data, isLoading, type, month, year, error } = useSelector(
    (state) => state.statistics
  );

  useEffect(() => {
    dispatch(fetchStatistics({ type, month, year }));
  }, [dispatch, type, month, year]);

  return (
    <section className={styles.statisticsSection}>
      <div className={styles.statisticsContainer}>
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
      </div>
    </section>
  );
};



export default StatisticsTab;

