import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'http://localhost:5000', // Your backend base URL
  withCredentials: true,           // Include credentials (e.g., cookies)
});

// Interceptor to attach tokens for authenticated requests
axiosApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('accesstoken'); // Retrieve token
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`; // Add token to headers
  }
  return config;
});

export default axiosApi;
