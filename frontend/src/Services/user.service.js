import axios from 'axios';
import authHeader from './auth-header';
import AddChannels from '../admin/addChannels'

const API_URL = 'http://localhost:3001/football/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + '');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'GetChannel/?:id', { headers: authHeader() });
  }
}

export default new UserService();