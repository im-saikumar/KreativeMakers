import React from "react";
import Combo from "./combo";
import comboList from "./comboList";
import styles from "./combo.module.css";

const MakersCombo = () => {
  const combopack = (title) => {
    return (
      <Combo
        key={title.id}
        id={title.id}
        image={title.image}
        name={title.name}
        page={title.page}
      />
    );
  };
  return (
    <div className={styles.lay}>
      <h1 className={styles.title}>Makers Combo's</h1>
      <div className={styles.app}>{comboList.map(combopack)}</div>
    </div>
  );
};

export default MakersCombo;
