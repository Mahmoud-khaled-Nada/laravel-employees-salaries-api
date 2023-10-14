import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Fingerprint from "./pages/Fingerprint/Fingerprint";
import ToDayReporte from "./pages/reports/ToDayReporte";


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
        element: <Fingerprint />,
      },
      {
        path: "/to-day-reporte",
        element: <ToDayReporte />,
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
