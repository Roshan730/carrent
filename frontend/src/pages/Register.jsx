import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOADING", payload: true });
    if (password !== confirmPassword) {
      toast.error("Password doesn`t match");
      return;
    }
    try {
      await axios.post("/api/users/register", {
        username,
        password,
      });
      toast.success("Register SuccessFull");
      dispatch({ type: "LOADING", payload: false });
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Error, try again");
      dispatch({ type: "LOADING", payload: false });
    }
  };

  return (
    <Layout>
      <div className="form-container">
        <div className="form-group">
          <form className="form" onSubmit={submitHandler}>
            <h3 className="form-title">Create Account</h3>
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
              <label htmlFor="password">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                type="password"
                id="password"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="rpassword">Confirm Password</label>
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="input"
                type="password"
                id="rpassword"
                required
              />
            </div>
            <div className="form-group">
              <button className="rent-now">Create Account</button>
            </div>
            <div className="form-group">
              <p>
                Have an account?
                <a href="/login" className="form-link">
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
