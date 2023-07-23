// @flow
import * as React from "react";
import {
  DivItemGellarySC,
  DivWrapper1SC,
  DivWrapper2SC,
  DivWrapperImageSC,
  DivWrapperTextParentSC,
  SpanH4SC,
  SpanSC,
} from "../styles.join_us";
import { motion } from "framer-motion";
type Props = {
  image: string;
  textTitle: string;
  text: string;
  direct: string;
  bgSize?: string;
  num: number;
};
const ItemGellary = (props: Props) => {
  const { image, textTitle, text, direct, num } = props;

  return (
    <DivItemGellarySC $direct={direct}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {
            x: direct === "ltr" ? -100 : 100,
            opacity: 0,
          },
          visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: num * 0.3 },
          },
        }}
      >
        <DivWrapperTextParentSC>
          <DivWrapper1SC></DivWrapper1SC>
          <DivWrapper2SC></DivWrapper2SC>
          <SpanSC>
            <SpanH4SC>{textTitle}</SpanH4SC>
            {text}
          </SpanSC>
        </DivWrapperTextParentSC>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {
            x: direct === "ltr" ? 100 : -100,
            opacity: 0,
          },
          visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: num * 0.3 },
          },
        }}
      >
        <DivWrapperImageSC $src={image} $direct={direct}></DivWrapperImageSC>
      </motion.div>
    </DivItemGellarySC>
  );
};

export default ItemGellary;
