import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "";
export const API = `${BACKEND_URL}/api`;

const TOKEN_KEY = "ansh_admin_token";
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const setToken = (t) => localStorage.setItem(TOKEN_KEY, t);
export const clearToken = () => localStorage.removeItem(TOKEN_KEY);

const authHeaders = () => ({ headers: { "X-Admin-Token": getToken() || "" } });

export const blogApi = {
  list: (category) =>
    axios.get(`${API}/blog`, {
      params: category && category !== "All" ? { category } : {},
    }),
  get: (slug) => axios.get(`${API}/blog/${slug}`),
  categories: () => axios.get(`${API}/blog/categories`),
  create: (data) => axios.post(`${API}/blog`, data, authHeaders()),
  update: (id, data) => axios.put(`${API}/blog/${id}`, data, authHeaders()),
  remove: (id) => axios.delete(`${API}/blog/${id}`, authHeaders()),
  upload: (file) => {
    const fd = new FormData();
    fd.append("file", file);
    return axios.post(`${API}/blog/upload`, fd, authHeaders());
  },
  login: (password) => axios.post(`${API}/admin/login`, { password }),
};
