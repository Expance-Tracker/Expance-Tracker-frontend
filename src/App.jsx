import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import LoginPage from "./pages/LoginPage/LoginPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import Loader from "./components/Loader/Loader";

function App() {
  const isLoading = useSelector(state => state.global?.isLoading ?? false);
  console.log('Current loading state:', isLoading);
  
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>

      {isLoading && <Loader />}
    </>
  );
}

export default App;