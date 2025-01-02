import React from "react";
import styles from "./cartList.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartList = ({ name, price, id, per }) => {
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <>
      <div className={styles.cartList}>
        <div>
          <li>{name}</li>
          <li>
            <p className={styles.p}>Price: Rs {price.toLocaleString('en-IN')} / {per}.</p>
          </li>
        </div>
        <div className={styles.icon}>
          <div onClick={remove}>
            <CloseIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartList;
