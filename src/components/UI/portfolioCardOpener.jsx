import React from "react";
import classes from "./portfolioCardOpener.module.css";

const portfolioCardOpener = ({close, image}) => {
  return (
    <div onClick={close} className={classes.bg}>
      <center className={classes.center}>
        <img
          className={classes.image}
          src={image}
          alt=""
        />
      </center>
    </div>
  );
};

export default portfolioCardOpener;
