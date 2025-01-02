import React from 'react'
import Card from '../card/Card';
import DcardListNames from "./DcardListNames";

const Dpage = () => {
  function DigitalPage(props) {
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
  return <div className="pageLayout">{DcardListNames.map(DigitalPage)}</div>;
}

export default Dpage;