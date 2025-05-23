import "./App.css";

import { Route, Routes } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage/DashboardPage";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import RestrictedRoute from "./components/routes/RestrictedRoute";

function App() {
  return (
    <Routes>
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
      <Route path="/dashboard" element={<DashboardPage />} />
      {/* Щоб побачити Header, у верхньому element, замість <DashboardPage /> прописати <Header /> та перейти в браузере на роут "/dashboard". Тому що, header може бачити тільки логінізований користувач, а логіка з логіном поки що не прописана */}
    </Routes>
  );
}

export default App;
