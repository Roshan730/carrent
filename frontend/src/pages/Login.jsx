import React from "react";
import Layout from "../components/Layout";

const Login = () => {
  return (
    <Layout>
      <div className="form-container">
        <div className="form-group">
          <form className="form">
            <h3 className="form-title">Login</h3>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input className="input" type="text" id="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">password</label>
              <input className="input" type="password" id="password" required />
            </div>
            <div className="form-group">
              <button className="rent-now">Login</button>
            </div>
            <div className="form-group">
              <p>
                Don't have an account?{" "}
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
