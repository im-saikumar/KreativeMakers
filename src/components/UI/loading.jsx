import React from "react";
import classes from "./loading.module.css";

const Loading = () => {
  return (
    <center>
      <div className={classes.loader}></div>
    </center>
  );
};

export default Loading;
