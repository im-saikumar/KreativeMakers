import React from 'react'
import classes from "./form.module.css";
import { useSelector } from "react-redux";


const Form = ({closeFormHandler, total}) => {
  const cartItems = useSelector((state) => state.cart.itemsList);

  function cartListNames({name, per, price}) {
    const ListName = [` "${name} / ${per} = Rs ${price}" `];
    return ListName;
  }

  const listName = (cartItems.map(cartListNames));


  return (
    <>
      <div className={classes.pageLayout}>
        <form action="https://formspree.io/f/mzbwabzr" method="POST" className={classes.formLayout}>
          <textarea type="text" name="data" className={classes.data}
            value={`${listName} || Total price = Rs ${total}`}/>
          <h2 className={classes.lay}>Please Fill the Details.</h2>
          <label className={classes.lay} >Name</label><br/>
          <input className={classes.lay} placeholder="Name" type="text" name="name" required/><br/>
          <label className={classes.lay}>Email</label><br/>
          <input className={classes.lay} name="email" placeholder="Email" type="email" required/><br/>
          <label className={classes.lay}>Mobile no.</label><br/>
          <input className={classes.lay} placeholder="Mobile number" type="text" name="mobile number" pattern="[0-9]{10}" 
           title="please enter 10 digits of your mobile number" required /><br/>
          <label className={classes.lay}>Select language</label><br/>
          <select className={classes.lay} name="language" required>
          <option value="" >Select</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Telugu">Telugu</option>
          </select><br/>
          <label className={classes.lay}>Description about product</label><br/>
          <textarea className={classes.text} placeholder="optional" type="text" name="note"/><br/>
          <button  type="submit" className={classes.lay}>Submit</button>
          <button onClick={closeFormHandler} className={classes.lay}>Cancel</button>
        </form>
      </div>
      <div className={classes.bg}></div>
    </>
  )
}

export default Form;