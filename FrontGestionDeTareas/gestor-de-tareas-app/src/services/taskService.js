import axios from 'axios';

const API_URL = 'https://localhost:7267/';

const listTasks = () => {
    return axios.get(`${API_URL}ListTask`);
};

const createTask = (task) => {
    return axios.post(`${API_URL}CreateTask`, task);
};

const updateTask = (task) => {
    return axios.put(`${API_URL}UpdateTask`, task);
};

export { listTasks, createTask, updateTask };