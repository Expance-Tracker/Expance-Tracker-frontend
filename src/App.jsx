import "./App.css";

import { Routes, Route } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import LoginPage from "./pages/LoginPage/LoginPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import LogoutModal from "./components/LogoutModal/LogoutModal";
import Header from "./components/Header/Header";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/login" element={<LoginPage />} />
      {/* Protected Routes Layout */}
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
    </Routes>
  );
}

export default App;
