import React from "react";
import Layout from "../components/Layout";

const onFinish = (values) => {
  console.log(values);
};

const Register = () => {
  return (
    <Layout>
      <div className="form-container">
        <div className="form-group">
          <form className="form" onFinish={onFinish}>
            <h3 className="form-title">Create Account</h3>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input className="input" type="text" id="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input className="input" type="password" id="password" required />
            </div>
            <div className="form-group">
              <label htmlFor="rpassword">Retype-password</label>
              <input
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
