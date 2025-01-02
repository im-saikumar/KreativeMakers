import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const NoMatchFound = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    setTimeout(() => {
    navigate("/");
    }, 3000);
  }, [navigate]);


  return (
    <div className='pageLayout'><h2 style={{marginTop: "100px" , color: "black"}}> #O_Ops! Page not found</h2></div>
  )
}

export default NoMatchFound