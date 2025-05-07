import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const login = (username, password) =>
  api.post("/token/", { username, password });

export const register = (username, email, password) =>
  api.post("/register/", { username, email, password });

export default api;
