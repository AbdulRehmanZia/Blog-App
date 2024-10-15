import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../features/authSlice";
import authService from "../../appwrite/auth";
import { Button } from "antd";

function LogoutBtn() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
        alert("Logout");
      })
      .catch((err) => alert(err));
  };
  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
