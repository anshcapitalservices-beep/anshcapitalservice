import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "";
export const API = `${BACKEND_URL}/api`;

// Admin session tokens live in sessionStorage so they are dropped when the tab
// closes; they also expire server-side.
const TOKEN_KEY = "ansh_admin_token";
const safe = (fn, fallback = null) => {
  try {
    return fn();
  } catch {
    return fallback;
  }
};
// Remove tokens left in localStorage by older builds.
safe(() => localStorage.removeItem(TOKEN_KEY));
export const getToken = () => safe(() => sessionStorage.getItem(TOKEN_KEY));
export const setToken = (t) => safe(() => sessionStorage.setItem(TOKEN_KEY, t));
export const clearToken = () => safe(() => sessionStorage.removeItem(TOKEN_KEY));

const authHeaders = () => ({ headers: { "X-Admin-Token": getToken() || "" } });

// Public blog reads are edge-cached for a minute; the admin portal adds a
// unique query param so it always sees its own latest edits.
const fresh = (on) => (on ? { _ts: Date.now() } : {});

export const blogApi = {
  list: (category, noCache = false) =>
    axios.get(`${API}/blog`, {
      params: { ...(category && category !== "All" ? { category } : {}), ...fresh(noCache) },
    }),
  get: (slug) => axios.get(`${API}/blog/${encodeURIComponent(slug)}`),
  categories: (noCache = false) => axios.get(`${API}/blog/categories`, { params: fresh(noCache) }),
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

export const contactApi = {
  submit: (data) => axios.post(`${API}/contact`, data),
  getLeads: () => axios.get(`${API}/contact/leads`, authHeaders()),
};
