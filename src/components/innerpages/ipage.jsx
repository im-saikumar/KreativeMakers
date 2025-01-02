import React from 'react'
import Card from '../card/Card'
import IcardListNames from "./IcardListNames";
import "./page.css";

const ipage = () => {
  function illustrationPage(props) {
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
  <div className="pageLayout">{IcardListNames.map(illustrationPage)}</div>
  );
}

export default ipage