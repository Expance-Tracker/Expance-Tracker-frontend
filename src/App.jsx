import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CurrencyTab from './pages/CurrencyTab/CurrencyTab';
import Delete from './components/Delete/Delete';
import Header from './components/Header/Header';
import HomeTab from './pages/HomeTab/HomeTab';
import Loader from './components/Loader/Loader';
import LoginPage from './pages/LoginPage/LoginPage';
import LogoutModal from './components/LogoutModal/LogoutModal';
import Navigation from './components/NavLink/Navigation';
import PrivateRoute from './components/routes/PrivateRoute';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import RestrictedRoute from './components/routes/RestrictedRoute';
import StatisticsTab from './pages/StatisticsTab/StatisticsTab';

function App() {
  const isLoading = useSelector((state) => state.global.isLoading);

  return (
    <div className="app-container">
      <Routes>
        {/* Public Routes */}
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/" component={<RegistrationForm />} />
          }
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/" component={<LoginPage />} />}
        />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <div className="container"> {/* ОБГОРТКА ДЛЯ ВСЬОГО КОНТЕНТУ */}
                <Header />
                <div className="page-content">
                  <HomeTab />
                </div>
              </div>
              <LogoutModal />
              <Delete />
            </PrivateRoute>
          }
        />
        <Route
          path="/statistics"
          element={
            <PrivateRoute>
              <div className="container"> {/* ОБГОРТКА ДЛЯ ВСЬОГО КОНТЕНТУ */}
                <Header />
                <div className="page-content">
                  <StatisticsTab />
                </div>
              </div>
              <LogoutModal />
              <Delete />
            </PrivateRoute>
          }
        />
        <Route
          path="/currency"
          element={
            <PrivateRoute>
              <div className="container"> {/* ОБГОРТКА ДЛЯ ВСЬОГО КОНТЕНТУ */}
                <Header />
                <div className="page-content">
                  <CurrencyTab />
                </div>
              </div>
              <LogoutModal />
              <Delete />
            </PrivateRoute>
          }
        />
      </Routes>
      <Loader />
    </div>
  );
}

export default App;