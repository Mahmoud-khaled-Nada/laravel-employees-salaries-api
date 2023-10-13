import axios from "axios";
import Cookies from "js-cookie";
const _api = axios.create({
    baseURL: import.meta.env.VITE_BACK_END_URL_API,
});

// eslint-disable-next-line react-hooks/rules-of-hooks

_api.interceptors.request.use((config) => {
    const token = Cookies.get("ACCESS_TOKEN");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

_api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const { response } = error;
        if (response.status === 401) {
            Cookies.remove("ACCESS_TOKEN");
        } else if (response.status === 404) {
            console.log("Page not found");
        }

        throw error;
    }
);

export { _api };
