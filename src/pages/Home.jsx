import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to={"/login"}>
            <a>Login</a>
          </Link>
        </li>
        <li>
          <Link to={"/register"}>
            <a>Register</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
