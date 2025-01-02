import React from "react";
import classes from "./sectionpage.module.css";
const about = () => {
  return (
    <div className={classes.sectionLayout}>
      <img
        className={classes.image}
        src="./source/logo images/main logo.png"
        alt=""
      />
      <h1 className={classes.h1}>about us</h1>
      <div className={classes.line}></div>
      <h4 className={classes.h4}>we are Kreative Makers</h4>
      <p className={classes.p}>
        Our team is a group of specialists in design and development with
        individuals having more than 5+ years of experience coalescing
        <span> 50+ years of experience</span> this, we launched an online
        website where you can order your designs. Our team is available 24/7.
        The prices we offer are reasonable and the best in the market We love to
        give best design with the experience, so we make premium designs in the
        given situations.
        <br /> <br />
        <span className={classes.colorline}>
          It's time to place your order. Now that you know what you want, get
          started.
        </span>
      </p>
      <p className={classes.t}>
        We are the first website where you can book today and pay after
        confirmation.
      </p>
    </div>
  );
};

export default about;
