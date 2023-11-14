import React, { useState } from 'react'
import "../style/Register.css"
import {Link} from "react-router-dom"

export const Login = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")


    const signHandler = ()=>{
        const values = {
            email,
            password
}

console.log({values});

    }

  return (
        <div className="container">
    <div className="heading">Login</div>
    <form action="" className="form">
        <input onBlur={(e)=>setEmail(e.target.value)} className="input" type="email" name="email" id="email" placeholder="E-mail" />
      <input onBlur={(e)=>setPassword(e.target.value)} className="input" type="password" name="password" id="password" placeholder="Password" />
      <span className="forgot-password">
        <a href="/">Forgot Password ?</a></span>
      <input  onClick={()=>signHandler()} className="login-button" type="submit" value="Sign In" />
      
    </form>
    <div className="social-account-container">
        <Link to="/register"> <span className="title">Sign Up</span></Link>
       
       
      </div>
      <span className="agreement"><a href="/">Learn user licence agreement</a></span>
        </div>
    
  )
};




export const Register =() => {
   const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")


    const signHandler = ()=>{
        const values = {
            email,
            password
}

console.log({values});

    }

  return (
    <div className="container">
    <div className="heading">Sign Up</div>
    <form action="" className="form">
        <input onBlur={(e)=>setEmail(e.target.value)} className="input" type="email" name="email" id="email" placeholder="E-mail" />
      <input onBlur={(e)=>setPassword(e.target.value)} className="input" type="password" name="password" id="password" placeholder="Password" />
      <span className="forgot-password">
        <a href="/">Forgot Password ?</a></span>
      <input onClick={()=>signHandler()} className="login-button" type="submit" value="Sign Up" />
      
    </form>
    <div className="social-account-container">
        <span className="title">Sign Up</span>
        <div className="social-accounts">
          
        </div>
      </div>
        </div>
  )
};
