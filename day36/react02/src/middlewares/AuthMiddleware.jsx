import { Navigate, Outlet } from "react-router-dom";

export default function AuthMiddleware() {
  const isAuth = localStorage.getItem("is_login") ? true : false;
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}
