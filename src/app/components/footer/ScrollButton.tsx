import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";
import { IconLogoSC } from "@/app/components/header/styles.header";
import logo from "@/app/images/Logo.svg";
import { motion } from "framer-motion";
import { BoxArrowSC, Button } from "./styles.footer";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  });

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 600) {
      setVisible(true);
    } else if (scrolled <= 600) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
               in place of 'smooth' */
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      <BoxArrowSC>
        <HiArrowUp />
      </BoxArrowSC>
    </Button>
  );
};

export default ScrollButton;
