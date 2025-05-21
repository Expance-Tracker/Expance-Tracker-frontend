import "./App.css";
import { Routes, Route } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import LoginPage from "./pages/LoginPage/LoginPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import Header from "./components/Header/Header";

// import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      {/* Щоб побачити Header, у верхньому element, замість <DashboardPage /> прописати <Header /> та перейти в браузере на роут "/dashboard". Тому що, header може бачити тільки логінізований користувач, а логіка з логіном поки що не прописана */}
    </Routes>
  );
}

export default App;
