// src/api/config.ts

import axios from 'axios';

// Konfigurasi URL dasar API backend
export const API_URL = 'http://localhost:3000/api';

// Membuat instance Axios dengan konfigurasi dasar
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    withCredentials: false, // Atur true jika menggunakan autentikasi berbasis cookie
    timeout: 5000, // Timeout request (opsional)
});

// Menambahkan interceptor untuk menangani respons dan error secara otomatis
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            console.error(`API Error [${error.response.status}]: ${error.response.data.message || error.message}`);
        } else if (error.request) {
            console.error('API Error: No response received from server.');
        } else {
            console.error(`API Error: ${error.message}`);
        }
        return Promise.reject(error);
    }
);

export default api;
