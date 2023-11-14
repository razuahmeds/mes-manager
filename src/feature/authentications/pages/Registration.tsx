import { useState } from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";

type Props = {};

const Registration = (props: Props) => {
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
        
        <input onBlur={(e) => setName(e.target.value)} className="input" type="text" placeholder="First Name" />
        <input onBlur={(e) => setName(e.target.value)} className="input" type="text" placeholder="Last Name" />
        
        <input onBlur={(e) => setEmail(e.target.value)} className="input" type="text" placeholder="E-mail" />
        
        <input onBlur={(e) => setPassword(e.target.value)} className="input" type="password" name="" id="" placeholder="Password" />
        <input onBlur={(e) => setPassword(e.target.value)} className="input" type="password" name="" id="" placeholder="Confirm Password" />
       
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
        <Link to="/login">
          {" "}
          <span className="title">Sign Up</span>
        </Link>
      </div>
      <span className="agreement">
        <a href="/">Learn user licence agreement</a>
      </span>
    </div>
  );
};

export default Registration;
