import axiosInstance from './axiosConfig';

export const authService = {
    async register(userData) {
        const response = await axiosInstance.post('/register', userData);
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response.data;
    }
}; 