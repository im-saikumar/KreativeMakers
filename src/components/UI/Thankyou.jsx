import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Thankyou = () => {
  const navigate = useNavigate();

  useEffect(()=>{
  setTimeout(() => {
    navigate("/");
    }, 15000);
  });

  return (
    <div className="pageLayout">
      <center style={{margin: "10px 10px"}}>
        <h1 style={{ width: "100%" }}>Thankyou For Submit</h1>
        <br />
        <p style={{margin: "20px 10px"}}>We will get back to you in shortly</p>
        <Link to= "/" reloadDocument> Go Home</Link>
      </center>
    </div>
  );
};

export default Thankyou;
