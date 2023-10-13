
import { Outlet } from "react-router-dom";
import './style.css'
export default function AuthLayout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
