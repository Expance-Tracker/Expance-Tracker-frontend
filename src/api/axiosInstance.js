import axios from "axios";
import { store } from "../redux/store"; // або ваш шлях до store
import { logout } from "../redux/auth/operations"; // ваша функція logout

const api = axios.create({
  baseURL: "https://expance-tracker-backend-9zu7.onrender.com/"
});

// Interceptor для відповідей
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Якщо токен невалідний або протермінований — викликаємо logout
      store.dispatch(logout());
    }
    return Promise.reject(error);
  }
);
