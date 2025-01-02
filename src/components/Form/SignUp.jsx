import React from 'react'
import { Link } from "react-router-dom";
import classes from "./pageLayout.module.css";

const SignUp = () => {

  return (
    <div className={classes.pageLayout}>
      <form className={classes.formLayout}>
        <h2 className={classes.lay}>Sign Up</h2>
        <label className={classes.lay}>Enter Email</label><br/>
        <input className={classes.lay} placeholder="Enter your email" type="email" /><br/>
        <label className={classes.lay}>Enter Password</label><br/>
        <input className={classes.lay} placeholder="Password" type="password" /><br/>
        <label className={classes.lay}>Confirm Password</label><br/>
        <input className={classes.lay} placeholder="Password" type="password" /><br/>
        <label className={classes.lay}>Mobile no.</label><br/>
        <input className={classes.lay} value=" +91" style={{width: "30px" , padding: "5px 0"}} type="tel" disabled="+91" />
        <input className={classes.lay} placeholder="Mobile no." type="tel" /><br/>
        <label className={classes.lay}>Select language</label><br/>
        <select className={classes.lay}>
        <option value="0">Select</option>
        <option value="1">English</option>
        <option value="2">Hindi</option>
        <option value="2">Telugu</option>
        </select><br/>

        <button type="submit" value="Submit" className={classes.lay}>Sign Up</button>
        <p className={classes.lay}>Already an member? <Link to='/signin'> Sign In here </Link></p>
      </form>
    </div>
  );
}

export default SignUp