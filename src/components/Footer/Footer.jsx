import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.label}>
        <ul>
          <li><Link id="li" to="about">About</Link></li>
          <li><Link id="li" to="services">Services</Link></li>
          <li><Link id="li" to="help">Help</Link></li>
          <li><Link id="li" to="explore">Explore</Link></li>
          <li><Link id="li" to="contact">Contact Us</Link></li>
        </ul>
      </div>
      <p className={styles.copyright}>
        Copyright © {new Date().getFullYear()} Kreative Makers | All Rights
        Reserved
      </p>
    </div>
  );
}

export default Footer;
