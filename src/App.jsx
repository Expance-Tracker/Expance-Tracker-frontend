import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage/LoginPage'
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import DashboardPage from "./pages/DashboardPage/DashboardPage";

function App() {
    return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    );
}

export default App
