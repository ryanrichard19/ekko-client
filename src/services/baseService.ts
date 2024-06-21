import axios, { AxiosInstance } from 'axios';

const API_URL = `${process.env.REACT_APP_BACKEND_URL}`;

const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

class BaseService {
  protected api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: API_URL,
      headers: getAuthHeader(),
    });
  }
}

export default BaseService;
