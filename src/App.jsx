import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import LoginPage from "./pages/LoginPage/LoginPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import LogoutModal from "./components/LogoutModal/LogoutModal";
import Header from "./components/Header/Header";
import RestrictedRoute from "./components/routes/RestrictedRoute";
import Loader from "./components/Loader/Loader";

function App() {
  const isLoading = useSelector(state => state.global?.isLoading ?? false);
  console.log('Current loading state:', isLoading);
  
  return (
    <>
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

      {isLoading && <Loader />}  
    </>
  );
}

export default App;