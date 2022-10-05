import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Layout = (props) => {
  const navigate = useNavigate();

  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  return (
    <>
      <div className="header">
        <div className="col">
          <a href="/" className="logo">
            Roshan
          </a>
        </div>
        <div className="col">
          <span className="name">{userInfo.username}</span>

          <a href="/login" className="login">
            Login
          </a>
        </div>
      </div>
      <div className="main">{props.children}</div>
      <div className="footer">
        <p>&copy;2022. All Rights are reserved.Powered by Roshan</p>
      </div>
    </>
  );
};

export default Layout;
