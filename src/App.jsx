import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import LoginPage from "./pages/LoginPage/LoginPage";
import LogoutModal from "./components/LogoutModal/LogoutModal";
import Header from "./components/Header/Header";
import RestrictedRoute from "./components/routes/RestrictedRoute";
import HomeTab from "./pages/HomeTab/HomeTab";
import StatisticsTab from "./pages/StatisticsTab/StatisticsTab";
import Loader from "./components/Loader/Loader";
import Delete from "./components/Delete/Delete";
import Navigation from "./components/NavLink/Navigation";
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
                <Navigation />
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
                <Navigation />
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
