import axios from 'axios';

const apiClient = axios.create({
  baseUrl: 'http://localhost:5002',
  timeout: 1000,
});

export const login = async (data) => {
  try {
    return await apiClient.post('/auth/login', data);
  } catch (exception) {
    return {
      error: true,
      exception: error,
    };
  }
};

export const register = async (exception) => {
  try {
    return await apiClient.post('/auth/register', data);
  } catch (error) {
    return {
      error: true,
      exception: error,
    };
  }
};
