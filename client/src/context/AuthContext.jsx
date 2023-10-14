import { createContext, useContext, useEffect, useState } from "react";
import {api} from "../api/axios.js";
// import { useNavigate, BrowserRouter } from "react-router-dom";

const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([]);
  // const navigate = useNavigate();

  const csrf = () => api.get("/sanctum/csrf-cookie");

  const getUser = async () => {
    const { data } = await api.get("/api/user");
    setUser(data);
  };

  const login = async ({ ...data }) => {
    await csrf();
    setErrors([]);
    try {
      await api.post("/login", data);
      await getUser();
      // navigate("/");
      window.location.href = '/';
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  const register = async ({ ...data }) => {
    await csrf();
    setErrors([]);
    try {
      await api.post("/register", data);
      await getUser();
      // navigate("/");
      window.location.href = '/';
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const logout = () => {
    api.post("/logout").then(() => {
      setUser(null);
    });
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, errors, getUser, login, register, logout, csrf }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthContext() {
  return useContext(AuthContext);
}