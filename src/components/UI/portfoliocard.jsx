import React, { useState } from "react";
import classes from "./portfoliocard.module.css";
import PortfolioCardOpener from "./portfolioCardOpener";

const Portfoliocard = (props) => {
  const [handler, setHandler] = useState(false);

  function open() {
    setHandler(true);
  }

  function close() {
    setHandler(false);
  }

  return (
    <>
      {handler === true && <PortfolioCardOpener image={props.image} close={close}/> }
      <div onClick={open}>
        <img
          className={classes.image}
          src={props.image}
          alt=""
        />
      </div>
    </>
  );
};

export default Portfoliocard;
