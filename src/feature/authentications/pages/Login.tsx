import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

type Props = {};

const Login = (props: Props) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signHandler = () => {
    const values = {
      name,
      email,
      password,
    };

    console.log({ values });
  };

  return (
    <div className="container">
      <div className="heading">Sign In</div>
      <form action="" className="form">
        <input
          onBlur={(e) => setName(e.target.value)}
          className="input"
          type="text"
          placeholder="Name"
        />
        <input
          onBlur={(e) => setEmail(e.target.value)}
          className="input"
          type="text"
          placeholder="Email"
        />
        <input
          onBlur={(e) => setPassword(e.target.value)}
          className="input"
          type="password"
          name=""
          id=""
          placeholder="Password"
        />

        <span className="forgot-password">
          <a href="/">Forgot Password ?</a>
        </span>
        <input
          onClick={() => signHandler()}
          className="login-button"
          type="submit"
          value="Sign In"
        />
      </form>
      <div className="social-account-container">
        <Link to="/">
          {" "}
          <span className="title">Sign Up</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
