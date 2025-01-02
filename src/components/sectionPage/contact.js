import React from "react";
import classes from "./sectionpage.module.css";

const contact = () => {
  return (
    <div className={classes.sectionLayout}>
       <h1 className={classes.h1}>contact us</h1>
       <div className={classes.line}></div>

      <form className={classes.form} action="https://formspree.io/f/xvoyvjdz" method='POST'>
        <input className={classes.inp} type="text" name="name" placeholder="Name" required/><br/>
        <input className={classes.inp} type="email" name="name" placeholder="Email" required/><br/>
        <textarea className={classes.area} type="textarea" placeholder="Enter text here" name="textarea" required/><br/>
        <button type="submit" className={classes.button}>Submit</button>
      </form>
        <br/><p style={{textAlign: "center"}} className={classes.p}>-- or --</p>
     
      <p className={classes.t}>You can Join our Discord group to communicate with us.</p>
        <a href="https://discord.gg/4SEE3U6kJ4" target="blank">
          <button className={classes.btn}>Join Here</button>
        </a>
          
    </div>
  );
};

export default contact;
