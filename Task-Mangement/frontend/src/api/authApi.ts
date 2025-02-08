import axios from "axios";

const API_URL = "http://localhost:8080/api/users";

export const login = async (email: string, password: string) => {
  const res = await axios.post(`${API_URL}/login`, { email, password });
  return res.data;
};

export const signup = async (name: string, email: string, password: string) => {
  const res = await axios.post(`${API_URL}/register`, { name, email, password });
  return res.data;
};
