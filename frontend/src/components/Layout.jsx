import React from "react";

const Layout = (props) => {
  return (
    <>
      <div className="header">
        <div className="col">
          <a href="/" className="logo">
            Roshan
          </a>
        </div>
        <div className="col">
          {/* <span className="name">Hlo</span> */}
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
