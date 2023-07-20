import React, { ReactElement } from "react";
import {
  DivContainerSec6SC,
  DivContentSC,
  DivTitleSC,
  DivWrapSec6SC,
} from "./styles.section6";
import { FAQs, questionAnswer } from "./data";
import FAQElement from "./faq_element";

const FAQ = () => {
  return (
    <DivWrapSec6SC>
      <DivContentSC>
        <DivTitleSC> FAQ</DivTitleSC>

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
