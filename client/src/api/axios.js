import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACK_END_URL,
  withCredentials: true,
});

const weight = axios.create({
  baseURL: `${import.meta.env.VITE_BACK_END_URL_API}/weights`,
  withCredentials: true,
});

export { api, weight };
