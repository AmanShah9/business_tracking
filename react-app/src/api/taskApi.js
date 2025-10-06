import axios from './axiosInstance';

export const fetchTasks = async (params) => {
  const res = await axios.get('/tasks', { params });
  return res.data;
};

export const fetchTask = async (id) => {
  const res = await axios.get(`/tasks/${id}`);
  return res.data;
};

export const createTask = async (payload) => {
  const res = await axios.post('/tasks', payload);
  return res.data;
};

export const updateTask = async (id, payload) => {
  const res = await axios.put(`/tasks/${id}`, payload);
  return res.data;
};
