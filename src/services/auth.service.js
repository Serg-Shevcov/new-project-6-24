import axios from "axios";

const API_URL = "http://127.0.0.1:8000/auth/users/";

const register = (username, password, re_password, email) => {
  return axios.post(API_URL, {
    username,    
    password,
    re_password,
    email
  });
};

const login = async (username, password) => {
  const response = await axios
    .post(API_URL, {
      username,
      password,
    });
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;