import axios from 'axios';
import { SMARTBYTE_API } from './config';

const axiosInstance = axios.create({
  baseURL: SMARTBYTE_API.baseURL,
  withCredentials: true, // Important for cookies
  timeout: 30000, // 30 seconds timeout
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // No need for manual token handling since we're using cookies
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized errors (token expired, invalid, etc.)
      console.error('Unauthorized request - possibly logged out');
      // You might want to trigger logout here
      
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;