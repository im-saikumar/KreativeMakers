import React from "react";
import classes from "./sectionpage.module.css";

const Help = () => {
  return (
    <>
      <div className={classes.sectionLayout}>
        <h2 className={classes.help}>Terms & Conditions</h2>
        <ul className={classes.ul}>
          <li>Place your order by selecting any card, adding to your cart, and then filling out the form.</li>
          <li>
          After Your, Order Is Placed We Will Call You Within <span>"24 To 48"</span> Hours (In most Of the Cases We Connect ASAP ).
          </li>
          <li>We are <span>not currently charging any "GST" or other Fee Charges.</span></li>
          <li>
          After The Designer accepts your Order You Have To Pay The Designer<span> At least 50% </span>In Advance.
          </li>
          <li>After The Full Payment, You Will Get an Open File Of That Design ( If Needed ).</li>
          <li>
          In Case You Didn't Get Any Any Call From Your Side Within The Given Time In That Case :
          </li>
          <ul>
            <li>Either Designer Is Busy In Other Work.</li>
            <li>Or It's A Public Holiday For Designers.</li>
            <li>In That Case, You Have To <span> Reorder The Design </span> Again.</li>
          </ul>
          <li>If you design works outside of our websites with our designer, we are not responsible for the loss.</li>
          <li>As It Is now <span>START-UP </span>We Will Update More In Future.</li>
        </ul>
        <h2 className={classes.help}>for other complaints</h2>
        <ul className={classes.ul}>
          <li>Our Discord server is available directly to you</li>
          <a href="https://discord.gg/nXpjykQH3a" target="blank"><button className={classes.btn}>Join Here</button></a>
        </ul>
      </div>
    </>
  );
};

export default Help;
