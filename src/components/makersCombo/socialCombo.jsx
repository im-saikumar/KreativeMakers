import React from 'react'
import Card from '../card/Card';
import CcardListNames from '../innerpages/CcardListNames';
import GcardListNames from '../innerpages/GcardListNames';
import icardListNames from '../innerpages/IcardListNames';
import vcardListNames from '../innerpages/VcardListNames';

const socialCollection = () => {
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
        {GcardListNames.filter((card) => card.name === "Social posts").map(combo)}
        {CcardListNames.filter((card) => card.cname === "Social Collections").map(combo)}
        {GcardListNames.filter((card) => card.cname === "Social Collections").map(combo)}
        {icardListNames.filter((card) => card.cname === "Social Collections").map(combo)}
        {vcardListNames.filter((card) => card.cname === "Social Collections").map(combo)}
        {vcardListNames.filter((card) => card.name === "Reel Editing").map(combo)}
    </div>
  );
}

export default socialCollection