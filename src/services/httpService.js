import axios from "axios";

axios.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    if (!error.response) return Promise.reject({ data: error.toString() });
    else if (
      error.response.status === 401) {
      window.location.reload();
      return;
    } else return Promise.reject(error.response || { ok: 0, data: error.toString() });
  }
);


axios.interceptors.request.use((config) => {
  return config;
});

export default {
  get: axios.get
};
