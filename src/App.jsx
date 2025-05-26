import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import DashboardPage from './pages/DashboardPage';
import HomeTab from './pages/HomeTab';
import CurrencyTab from './pages/CurrencyTab';
import StatisticsTab from './pages/StatisticsTab';
import EditTransaction from './pages/EditTransaction';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* публічні */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />

        {/* основний інтерфейс */}
        <Route path="/" element={<DashboardPage />}>
          <Route index element={<HomeTab />} />
          <Route path="currency" element={<CurrencyTab />} />
          <Route path="statistics" element={<StatisticsTab />} />
        </Route>

        {/* окремий шлях для редагування */}
        <Route
          path="/transactions/edit/:id"
          element={<EditTransaction />}
        />

        {/* будь-який інший шлях */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
