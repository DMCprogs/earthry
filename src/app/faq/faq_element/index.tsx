"use client";
import React, { FC, useState } from "react";
import {
    DivAnswerSC,
    DivFAQContainerSC,
    DivIconBoxSC,
    DivQuestionSC,
    IconPlusSC,
} from "./styles.faq_el";
import { questionAnswer } from "../data";

const FAQElement: FC<{
    item: questionAnswer;
    key?: number | null;
}> = (props) => {
    const { item, key = null } = props;
    const [hide, setHide] = useState<boolean>(true);

    const hideAnswer = () => {
        setHide((prev) => !prev);
    };

    return (
        <>
            <DivFAQContainerSC key={key}>
                <DivQuestionSC onClick={hideAnswer}>
                    <h3>{item.question}</h3>
                    <DivIconBoxSC>
                        <IconPlusSC $hide={hide} />
                    </DivIconBoxSC>
                </DivQuestionSC>
                <DivAnswerSC $hide={hide}>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: item.answer,
                        }}
                        style={{minHeight: 0}}
                    ></div>
                </DivAnswerSC>
            </DivFAQContainerSC>
        </>
    );
};

export default FAQElement;
