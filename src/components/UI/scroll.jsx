import styles from "./scroll.module.css";

import React from "react";

const scroll = () => {
  return (
    <div>
      <center class={styles.container}>
        <div class={styles.field}>
          <div class={styles.mouse}></div>
        </div>
      </center>
    </div>
  );
};

export default scroll;
