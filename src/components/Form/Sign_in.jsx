import React from "react";
import { Link } from "react-router-dom";
import classes from "./pageLayout.module.css";

const SignIn = (loginHandler) => {
  const handleSubmit = (event) =>{
    event.preventDefault();
  }

  return (
    <div className={classes.pageLayout}>
      <form onSubmit={handleSubmit} className={classes.formLayout}>
        <h2 className={classes.lay}>Sign In</h2>
        <label className={classes.lay}>Email</label><br/>
        <input className={classes.lay} placeholder="Enter your email" type="email" /><br/>
        <label className={classes.lay}>Password</label><br/>
        <input className={classes.lay} placeholder="Password" type="password" /><br/>
        <button type="submit" value="Submit" onClick={loginHandler} className={classes.lay}>SignIn</button>
        <p className={classes.lay}>New here? <Link to="/signup"> Create an Account </Link></p>
      </form>
    </div>
  );
};

export default SignIn;
