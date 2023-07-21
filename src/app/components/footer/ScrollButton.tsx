"use client"
import React, {useState, useEffect} from 'react';
import {HiArrowUp} from "react-icons/hi";
import {BoxArrowSC, Button} from "@/app/components/footer/styles.footer";

const ScrollButton = () =>{

  const [visible, setVisible] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  })

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 600){
      setVisible(true)
    }
    else if (scrolled <= 600){
      setVisible(false);
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };



  return (
      <Button onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
        <BoxArrowSC>
          <HiArrowUp />
        </BoxArrowSC>
      </Button>
  );
}

export default ScrollButton;