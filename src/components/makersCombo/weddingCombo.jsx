import React from 'react'
import Card from '../card/Card';
import GcardListNames from '../innerpages/GcardListNames';
import icardListNames from '../innerpages/IcardListNames';
import vcardListNames from '../innerpages/VcardListNames';

const weddingCombo = () => {
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
        {GcardListNames.filter((card) => card.cname === "Wedding Collections").map(combo)}
        {icardListNames.filter((card) => card.cname === "Wedding Collections").map(combo)}
        {vcardListNames.filter((card) => card.cname === "Wedding Collections").map(combo)}
    </div>
  );
}

export default weddingCombo