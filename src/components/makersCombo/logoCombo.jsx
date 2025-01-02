import React from "react";
import Card from "../card/Card";
import icardListNames from "../innerpages/IcardListNames";
import vcardListNames from "../innerpages/VcardListNames";

const logoCombo = () => {
  function combo(props) {
    return (
      <Card
        key={props.id}
        id={props.id}
        image={props.image}
        name={props.name}
        price={props.price}
        tools={props.tools}
        per={props.per}
        cname={props.cname}
      />
    );
  }
  return (
    <div className="pageLayout">
        {icardListNames.filter((card) => card.cname === "Logo Collections").map(combo)}
        {vcardListNames.filter((card) => card.cname === "Logo Collections").map(combo)}
    </div>
  );
};

export default logoCombo;
