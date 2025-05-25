import "./App.css";

import { Routes, Route } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import LoginPage from "./pages/LoginPage/LoginPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import StatisticsTab from "./pages/StatisticsTab"; // ✅ Імпорт
import LogoutModal from "./components/LogoutModal/LogoutModal";
import Header from "./components/Header/Header";
import RestrictedRoute from "./components/routes/RestrictedRoute";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/"
        element={
          <RestrictedRoute redirectTo="/dashboard" component={<LoginPage />} />
        }
      />
      <Route path="/register" element={<RegistrationForm />} />
      <Route
        path="/login"
        element={
          <RestrictedRoute redirectTo="/dashboard" component={<LoginPage />} />
        }
      />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <>
            <Header />
            <LogoutModal />
            <DashboardPage />
          </>
        }
      />

      <Route
        path="/statistics"
        element={
          <RestrictedRoute
            redirectTo="/login"
            component={
              <>
                <Header />
                <LogoutModal />
                <StatisticsTab />
              </>
            }
          />
        }
      />
    </Routes>
  );
}

export default App;