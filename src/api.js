import axios from 'axios';
import { logout } from './shared/utils/auth';
const apiClient = axios.create({
  baseURL: 'http://localhost:5002/api',
  timeout: 1000,
});

apiClient.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem('user');

    if (userDetails) {
      const token = JSON.parse(userDetails).token;
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//Public routes

export const login = async (data) => {
  try {
    return await apiClient.post('/auth/login', data);
  } catch (exception) {
    return {
      error: true,
      exception: exception,
    };
  }
};

export const register = async (data) => {
  try {
    return await apiClient.post('/auth/register', data);
  } catch (exception) {
    return {
      error: true,
      exception: exception,
    };
  }
};

// Secure routes

export const sendFriendInvitation = async (data) => {
  try {
    return await apiClient.post('/friend-invitation/invite', data);
  } catch (exception) {
    checkRouteResponse(exception);
    return {
      error: true,
      exception,
    };
  }
};

const checkRouteResponse = (exception) => {
  const responseCode = exception?.response?.status;

  if (responseCode) {
    (responseCode === 401 || responseCode === 403) && logout();
  }
};
