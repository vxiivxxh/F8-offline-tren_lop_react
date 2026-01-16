import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import { useAuth } from "../store/authStore";
export default function MainLayout() {
  const fetchTodos = useAuth((state) => state.fetchTodos);
  useEffect(() => {
    fetchTodos;
  }, []);
  return (
    <div>
      <Nav />
      <hr />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
