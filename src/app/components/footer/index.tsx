import React from "react";
import ScrollButton from "./ScrollButton";

import {
  DovBoxFooterSC,
  TitleFooterSC,
  DivWrapperFooterSC,
} from "./styles.footer";
import ParallaxText from "../ParallaxText";

const Footer = () => {
  return (
    <DivWrapperFooterSC>
      <ParallaxText baseVelocity={-1}>EARTHY</ParallaxText>
      <ParallaxText baseVelocity={1}>EARTHY</ParallaxText>
      <DovBoxFooterSC>
        <TitleFooterSC>©2023 EARTHY, ALL RIGHTS RESERVED.</TitleFooterSC>
        <ScrollButton />
      </DovBoxFooterSC>
    </DivWrapperFooterSC>
  );
};

export default Footer;
