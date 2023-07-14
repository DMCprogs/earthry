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
} from "../styles.tokenomics";

type Props = {
  image: string;
  textTitle: string;
  text: string;
  direct: string;
  bgSize?: string;
};
const ItemGellary = (props: Props) => {
  const { image, textTitle, text, direct, bgSize = "cover" } = props;

  return (
    <DivItemGellarySC direct={direct}>
      <DivWrapperTextParentSC>
        <DivWrapper1SC></DivWrapper1SC>
        <DivWrapper2SC></DivWrapper2SC>
        <SpanSC>
          <SpanH4SC>{textTitle}</SpanH4SC>
          {text}
        </SpanSC>
      </DivWrapperTextParentSC>
      <DivWrapperImageSC
        src={image}
        direct={direct}
        bgSize={bgSize}
      ></DivWrapperImageSC>
    </DivItemGellarySC>
  );
};

export default ItemGellary;
