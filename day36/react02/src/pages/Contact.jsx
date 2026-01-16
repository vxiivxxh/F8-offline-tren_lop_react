import React from "react";
// import { useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
let isLogin = false;
export default function Contact() {
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!isLogin) {
  //     navigate("/products");
  //   }
  // }, []);
  if (!isLogin) {
    return <Navigate to={"/products"} replace />;
  }
  return (
    <div>
      <h1>Contact</h1>
      <button
        onClick={() =>
          navigate("/products", {
            replace: true,
          })
        }
      >
        Click me
      </button>
    </div>
  );
}

//Hạn chế: window.location.href
