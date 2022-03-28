import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo b">
          Social Network Project
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="login.html">Login</a>
          </li>
          <li>
            <a href="signup.html">Signup</a>
          </li>
          <li>
            <a href="profile.html">Profile</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
