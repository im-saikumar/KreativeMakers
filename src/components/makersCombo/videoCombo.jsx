import React from 'react'
import vcardListNames from '../innerpages/VcardListNames';
import Card from '../card/Card';

const videoCombo = () => {
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
        {vcardListNames.filter((card) => card.cname === "Video Collections").map(combo)}
        {vcardListNames.filter((card) => card.name === "Reel Editing").map(combo)}
    </div>
  );
}

export default videoCombo;