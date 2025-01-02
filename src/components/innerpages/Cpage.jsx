import React from "react";
import Card from "../card/Card";
import ccardListNames from "./CcardListNames";

const Cpage = () => {
  function ContentPage(props) {
    return (
      <Card
        key={props.id}
        id={props.id}
        image={props.image}
        name={props.name}
        price={props.price}
        tools={props.tools}
        per={props.per}
      />
    );
  }
  return (
    <div className="pageLayout">
      {ccardListNames.map(ContentPage)}
      <div className="imp">
        <p>
          *Prices change depending on project to project ( according to time
          taken, research, etc ) but these are the base prices.
        </p>
      </div>
    </div>
  );
};

export default Cpage;
