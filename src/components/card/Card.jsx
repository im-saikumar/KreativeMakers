import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import styles from "./Card.module.css";

function Card({ image, tools, name, id, price, per }) {
  const [Select, getSelect] = useState(false);

  const dispatch = useDispatch();

  const addTocart = () => {
    if (!Select === true) {
      dispatch(
        cartActions.addToCart({
          name,
          id,
          price,
          per,
        })
      );
    }
  };

  const removeFromCart = () => {
    if (!Select === false) {
      dispatch(cartActions.removeFromCart(id));
    }
  };

  function handler() {
    getSelect(!Select);
  }

  return (
    <div
      className={styles.card}
      onClick={() => {
        handler();
        addTocart();
        removeFromCart();
      }}
      style={{ backgroundColor: Select && "#6E2FBB", color: Select && "white" }}
    >
      <img className={styles.image} src={image} alt="" />
      <h2 className={styles.title}>{name}</h2>
      <h3 className={styles.price}>
        Price : ₹ {price.toLocaleString('en-IN')} / {per}
      </h3>
      <div>
        <h4 className={styles.tools}>- Info -</h4>
        <div>
          <ul className={styles.toolnames}>
            <li>{tools}</li>
          </ul>
          <div
            className={styles.line}
            style={{ backgroundColor: Select && "white" }}
          />
        </div>
        <p
          className={styles.note}
          style={{ fontSize: Select && "12px", fontWeight: Select && "bolder" }}
        >
          {Select ? "Selected" : "Click to Select"}
        </p>
      </div>
    </div>
  );
}

export default Card;
