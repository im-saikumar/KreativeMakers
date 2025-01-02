import React from "react";
import classes from "./sectionpage.module.css";
import Portfoliocard from "../UI/portfoliocard";
import portfolioList from "../UI/portfolioList";

const portfolio = () => {
  function portfolioListNames(props) {
    return <Portfoliocard key={props.id} id={props.id} image={props.image} />;
  }

  return (
    <div className={classes.pageLayout}>
      <center>
        <h1 className={classes.head}>Portfolio</h1>
        <p className={classes.p}>------ best works all the time ------</p>
        <div className={classes.flex}>
          {portfolioList.map(portfolioListNames)}
        </div>
      </center>
    </div>
  );
};

export default portfolio;
