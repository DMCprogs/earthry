import React, { ReactElement } from "react";
import {
  DivContainerSec6SC,
  DivContentSC,
  DivTitleSC,
  DivWrapSec6SC,
} from "./styles.section6";
import { FAQs, questionAnswer } from "./data";
import FAQElement from "./faq_element";
import { DivH1SC } from "../blog/styles.blog";

const FAQ = () => {
  return (
    <DivWrapSec6SC>
      <DivContentSC>
        <DivH1SC
          $media1={"66px 0 34px 0"}
          $media2="100px 0 10px 0"
          $media3="80px 0 0px 0"
          $media4="45px 0 0px 0"
        >FAQ
        </DivH1SC>
        <DivContainerSec6SC>
          {FAQs.map(
            (item: questionAnswer, index: number): ReactElement => (
              <>
                <FAQElement key={index} item={item} />
              </>
            )
          )}
        </DivContainerSec6SC>
      </DivContentSC>
    </DivWrapSec6SC>
  );
};

export default FAQ;
