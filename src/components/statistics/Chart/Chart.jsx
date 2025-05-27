import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import styles from "./Chart.module.css";

const COLORS = [
  "#FFD600", "#FFB800", "#FFA000", "#FF6F00", "#FF3D00",
  "#E53935", "#8E24AA", "#3949AB", "#00897B", "#43A047", "#FDD835"
];

const Chart = ({ type, data = [] }) => {
  const filtered = data.find(item => item.type === type);
  const categories = filtered?.categories || [];

  if (!categories.length) {
    return <div className={styles.chartWrapper}>No data</div>;
  }

  return (
    <div className={styles.chartWrapper}>
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={categories}
            dataKey="total"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={90}
            innerRadius={60}
            paddingAngle={3}
            labelLine={false}
            label={false}
          >
            {categories.map((entry, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;