import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import Card from "./subcriptionCard";
import styles from "./subcription.module.css";
import sDetails from "./subcriptionsDetails";

const Subcription = ({id, name, price, per}) => {

const [select, setSelect] = useState(false);
  
    const dispatch = useDispatch();

    const addTocart = () => {
      if (!select === true) {
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
      if (!select === false) {
        dispatch(
          cartActions.removeFromCart(id)
        );
      }
    };

    function handler() {
      setSelect(!select);
    }

  return (
    <>
       <div className={styles.space}>
         <h1 className={styles.title}>{name}</h1>
         <div>
           {sDetails.filter(details => details.name === name).map((props) => (
             <Card key={props.id} name={props.name} img={props.img} />
           ))}
           <h3 className={styles.price}>₹ {price} / {per}</h3>
           <button 
             style={{ backgroundColor: select && "#252525", color: select && "white"}} 
           onClick={()=>{handler(); addTocart(); removeFromCart();}} className={styles.button}>{select ? "Added"  : "Add to Cart" }</button>
         </div>
       </div>
    </>
  );
};

export default Subcription;
