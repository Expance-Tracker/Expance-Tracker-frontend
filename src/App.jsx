import "./App.css";

import { Route, Routes } from "react-router-dom";

import CurrencyTab from "./pages/CurrencyTab/CurrencyTab";
import Header from "./components/Header/Header";
import HomeTab from "./pages/HomeTab/HomeTab";
import Loader from "./components/Loader/Loader";

import LoginPage from "./pages/LoginPage/LoginPage";
import LogoutModal from "./components/LogoutModal/LogoutModal";

import Delete from "./components/Delete/Delete";

import Navigation from "./components/NavLink/Navigation";

import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import RestrictedRoute from "./components/routes/RestrictedRoute";
import StatisticsTab from "./pages/StatisticsTab/StatisticsTab";
import { useSelector } from "react-redux";

import CurrencyTab from "./pages/CurrencyTab/CurrencyTab";
import PrivateRoute from "./components/routes/PrivateRoute";


function App() {
  const isLoading = useSelector((state) => state.global?.isLoading ?? false);

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
              <Header />
              <div className="page-content">
                <HomeTab />
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
              <Header />
              <div className="page-content">
                <Navigation />
                <StatisticsTab />
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
              <Header />
              <div className="page-content">
                
                <CurrencyTab />
              </div>
              <LogoutModal />
              <Delete />
            </PrivateRoute>
          }
        />
      </Routes>
      {isLoading && <Loader />}
    </div>
  );
}

export default App;