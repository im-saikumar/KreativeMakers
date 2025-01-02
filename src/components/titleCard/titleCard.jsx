import "./titleCard.css";
import React from "react";
import { Link } from "react-router-dom";

function TitleCard(props) {


  return (
    <Link to={`/${props.page}`} className="titleCardSize">
      <div className="titleCard">
        <img src={props.image} alt="" />
      </div>
      <h1 className="titleName">{props.name}</h1>
    </Link>
  );
}

export default TitleCard;
