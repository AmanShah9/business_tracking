import axios from './axiosInstance';

// Replace endpoints with your backend routes
export const loginApi = async (email, password) => {
  const res = await axios.post('/auth/login', { email, password });
  return res.data;
};

export const meApi = async () => {
  const res = await axios.get('/auth/me');
  return res.data;
};
