import React from "react";

export const Login = () => {
  return (
    <div className="mycard">
        <div className="card auth-card">
          <h3>Social Network Project</h3>
          <input type="text" placeholder="email" />
          <input type="text" placeholder="password" />
          <a className="waves-effect waves-light btn">Log in</a>
        </div>
    </div>
  );
};
