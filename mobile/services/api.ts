import axios, { AxiosInstance } from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // À adapter selon l'URL de ton API Go

const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export default api;
