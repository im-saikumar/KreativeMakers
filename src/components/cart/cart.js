import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./cart.module.css";
import CartList from "./cartList";
import Form from "./Modal/form";

const Cart = (name) => {
  let total = 0;
  const [modal, setModal] = useState(false);
  const itemsList = useSelector((state) => state.cart.itemsList);
  itemsList.forEach((item) => (total += item.totalPrice));
  const cartItems = useSelector((state) => state.cart.itemsList);

  function cartListNames(item) {
    return (
      <CartList
        key={item.id}
        id={item.id}
        quantity={item.quantity}
        name={item.name}
        price={item.price}
        total={item.totalPrice}
        per={item.per}
      />
    );
  }

  function formHandler() {
    return setModal(true);
  }

  function closeFormHandler() {
    return setModal(false);
  }

  // edit values for GST percentage

  let GSTpercentage = 0;
  let GST = (total / 100) * GSTpercentage;

  return (
    <>
      {modal === true && (
        <Form name={name} total={total} closeFormHandler={closeFormHandler} />
      )}

      <div className={classes.pageLayout}>
        <ul className={classes.section1}>
          {total === 0 ? (
            <>
              {" "}
              <h2 className={classes.text}>No item is selected</h2> <br />{" "}
              <Link to="/">Home</Link>{" "}
            </>
          ) : (
            <li className={classes.cartList}>{cartItems.map(cartListNames)}</li>
          )}
        </ul>
        <div className={classes.section2}>
        <div style={{marginLeft: "0"}} className={classes.order}>
          <p className={classes.layText}>Total : Rs. {total.toLocaleString('en-IN')}. </p>
          <p className={classes.layText}>Fee Charges : Rs. 0</p>
          <p className={classes.layText}>GST : {GSTpercentage}%</p>
          <hr />
          <p className={classes.lay}>Total Amount: Rs. {(total + GST).toLocaleString('en-IN')}.</p>
          <button
            onClick={formHandler}
            disabled={total === 0}
            className={classes.button}
          >
            Book Now
          </button>
        </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
