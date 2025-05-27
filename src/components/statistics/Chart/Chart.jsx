import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import styles from "./Chart.module.css";

// Можеш кольори взяти з Figma макету:
const COLORS = [
  "#FFD600", "#FFB800", "#FFA000", "#FF6F00", "#FF3D00",
  "#E53935", "#8E24AA", "#3949AB", "#00897B", "#43A047", "#FDD835"
];

// Поки що використаємо мокові дані
const mockData = [
  { category: "Food", amount: 1200 },
  { category: "Transport", amount: 600 },
  { category: "Fun", amount: 300 },
];

const Chart = ({ type, data = mockData }) => {
  // data — приходить із redux або через props, зараз тестовий варіант

  return (
    <div className={styles.chartWrapper}>
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={data}
            dataKey="amount"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={90}
            innerRadius={60}
            paddingAngle={3}
            labelLine={false}
            label={false}
          >
            {data.map((entry, i) => (
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