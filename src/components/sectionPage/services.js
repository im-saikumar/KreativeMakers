import React from "react";
import { Link, Outlet } from "react-router-dom";
import classes from "./sectionpage.module.css";

const services = () => {
  return (
    <div className={classes.sectionLayout}>
      <div>
       <Link id="link" to="/design"><img className={classes['images_services']} src="./source/services images/GDS.png" alt=""/></Link>
        <Link id="link" to="/development"><img className={classes['images_services']} src="./source/services images/WDS.png" alt=""/></Link>
        <Link id="link" to="/marketing"><img className={classes['images_services']} src="./source/services images/DMS.png" alt=""/></Link>
      </div>
        <center>
          <h1 className={classes.heading}>services</h1>
          <p className={classes.p}>
          Work with a <span>qualified designer</span> if you want a fantastic service website that stands out from the crowd. Find and work with a designer to bring your ideas to life,
          A fantastic website reveals who you are to the world,  <span>sticks in people's minds, and enables potential clients </span>to determine whether they discovered what they were looking for. All of that is communicated on websites through the use of colour, shape, and other design aspects.
          </p>
        </center> 
        <Outlet/>
    </div>
  );
};

export default services;
