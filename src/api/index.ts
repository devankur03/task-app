import axios from 'axios';
import { API_END_POINT } from '../constants';

export const createNewTask = (params: any) => {
    return axios.post(`${API_END_POINT}/create`, { ...params });
};

export const getAllTasks = () => {
    return axios.get(`${API_END_POINT}/tasks`);
};

export const updateTask = (id: string, updateParams: any) => {
    return axios.put(`${API_END_POINT}/update/${id}`, { ...updateParams });
};

export const deleteTask = (id: string) => {
    return axios.delete(`${API_END_POINT}/delete/${id}`);
};
