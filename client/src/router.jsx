import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import FirestWeigth from "./pages/weigthe/FirestWeigth";
import SecondWeigth from "./pages/weigthe/SecondWeigth";
import CompleteWeight from "./pages/weigthe/CompleteWeight";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      // {
      //   path: "/firest-weigth",
      //   element: <Navigate to="/" />,
      // },
      {
        path: "/",
        element: <FirestWeigth />,
      },
      {
        path: "/second-weigth/:id",
        element: <SecondWeigth />,
      },
      {
        path: "/complete-firest-weight",
        element: <CompleteWeight />,
      },
    ],
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
