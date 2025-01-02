import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./combo.module.css";
import PopLayout from "./popLayout";

const Combo = (props) => {
  const [select, getSelect] = useState(false);

  function handler() {
    return getSelect(true);
  }
  function offHandler(){
    return getSelect(false)
  }

  return (
    <Link id="link" to={`${props.page}`}><div onMouseOver={handler} onMouseLeave={offHandler} className={styles.comboCardSize}>
      <div className={styles.comboCard}>
         <img className={styles.img} src={props.image} alt="" />
          {/* <p>{props.name}</p> */}
        </div>
        <div>{select && <PopLayout />}</div>
      </div>
    </Link>
  );
};

export default Combo;
