import React from "react";
import styles from "./subcription.module.css";
import Subcription from "./subcription";
import sCDetails from "./subcriptionCardDetails";

const subcriptionDetail = () => {
  function cardDetails({ id, price, per, name }) {
    return <Subcription key={id} id={id} name={name} price={price.toLocaleString('en-IN')} per={per} />;
  }
  return (
    <div>
      <h1 className={styles.heading}>Subcriptions</h1>
      <div>{sCDetails.map(cardDetails)}</div>
    </div>
  );
};

export default subcriptionDetail;
