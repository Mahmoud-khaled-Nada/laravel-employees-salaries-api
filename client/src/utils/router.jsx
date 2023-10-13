import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Users from "../pages/auth/Users";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
          {
            path: '/',
            element: <Navigate to="/users"/>
          },
          {
            path: '/users',
            element: <Users/>
          },
        ]
      },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
