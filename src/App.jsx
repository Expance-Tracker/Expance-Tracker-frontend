import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import LoginPage from "./pages/LoginPage/LoginPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import LogoutModal from "./components/LogoutModal/LogoutModal";
import Header from "./components/Header/Header";
import RestrictedRoute from "./components/routes/RestrictedRoute";
import HomeTab from "./pages/HomeTab/HomeTab";
import Loader from "./components/Loader/Loader";
import Delete from "./components/Delete/Delete";

function App() {
  const isLoading = useSelector((state) => state.global?.isLoading ?? false);

  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/register" element={<RegistrationForm />} />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/" component={<LoginPage />} />}
        />

        {/* Protected Routes Layout */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <LogoutModal />
              <HomeTab />
              <Delete />
            </>
          }
        />
      </Routes>

      {isLoading && <Loader />}
    </>
  );
}

export default App;
