import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar(props) {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const [menu, setMenu] = useState(false);
  const [btnBump, setBtnBump] = useState(false);

  useEffect(() => {
    if (!quantity.length === 0) {
      return;
    }
    setBtnBump(true);
    const timer = setTimeout(() => {
      setBtnBump(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [quantity]);

  return (
    <>
      <nav className={classes.navbar}>
        <div className={classes.navConatiner}>
          <div onClick={() => setMenu(!menu)} className={classes.logo}>
            <MenuIcon className={classes.icon} />
            <p Link className={classes.logoName}>
              <img
                className={classes.logoImg}
                src="./source/logo images/KM.png"
                alt="logo"
              />
            </p>
          </div>

          {/* <Link style={{textDecoration :'none'}} to="./signin"><button className={classes.button}>Sign in</button></Link> */}
          <Link id="link" to="./cart">
            <button
              className={`${classes.button} ${
                btnBump && quantity !== 0 ? classes.bump : ""
              }`}
            >
              Cart{" "}
              {quantity !== 0 ? (
                <span className={classes.badge}>{quantity}</span>
              ) : (
                ""
              )}
            </button>
          </Link>
        </div>
      </nav>
      <>
        <div className={menu === true ? classes.sidebar : classes.closeSidebar}>
          <div
            className={menu === true ? classes.sidebarP : classes.closeSidebarP}
          >
            <CloseIcon
              onClick={() => setMenu(false)}
              className={classes.closeIcon}
            />
            <ul className={classes.listItems}>
              <Link onClick={() => setMenu(false)} className={classes.link} to="./">
                <li>Home</li>
              </Link>
              <Link onClick={() => setMenu(false)} className={classes.link} to="services">
                <li>Services</li>
              </Link>
              <Link onClick={() => setMenu(false)} className={classes.link} to="portfolio">
                <li>portfolio</li>
              </Link>
              <Link onClick={() => setMenu(false)} className={classes.link} to="about">
              <li>About</li>
              </Link>
              <Link onClick={() => setMenu(false)} className={classes.link} to="help">
                <li>Help</li>
              </Link>
            </ul>
          </div>
        </div>
        <div
          className={menu === true && classes.full}
          onClick={() => setMenu(false)}
        ></div>
      </>
    </>
  );
}

export default Navbar;
