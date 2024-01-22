import React, { useState, useEffect } from "react";
import Top from "./Contact/Top";
import Second from "./Contact/Second";
import Maps from "./Contact/Map";



const Contact = () => {
  useEffect(()=>{
    window.scrollTo({
      top: 0,
    });
  },[])

  return (

        <>
          <Top />
          <Second />
          <Maps />
        </>

  
  );
};

export default Contact;