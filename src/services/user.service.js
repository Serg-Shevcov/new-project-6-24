import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://127.0.0.1:8000/auth/token/login/";

const getPublicContent = () => {
  return axios.get(API_URL);
};

const getUserBoard = () => {
  return axios.get(API_URL, { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL, { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL, { headers: authHeader() });
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};

export default UserService;