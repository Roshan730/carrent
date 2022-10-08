import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../components/Layout";

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOADING", payload: true });

    try {
      const { data } = await axios.post("/api/users/login", {
        username,
        password,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      toast.success("Login SuccessFull");
      dispatch({ type: "LOADING", payload: false });
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Invalid password or username");
      dispatch({ type: "LOADING", payload: false });
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      localStorage.getItem("userInfo");
      navigate("/");
    }
  });

  return (
    <Layout>
      <div className="form-container">
        <div className="form-group">
          <form className="form" onSubmit={submitHandler}>
            <h3 className="form-title">Login</h3>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                className="input"
                type="text"
                id="username"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                type="password"
                id="password"
                required
              />
            </div>
            <div className="form-group">
              <button className="rent-now">Login</button>
            </div>
            <div className="form-group">
              <p>
                Don't have an account?
                <a href="/register" className="form-link">
                  Create Account
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
