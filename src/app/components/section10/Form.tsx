"use client";
import React, { useState } from "react";
import {
    DivBoxFormSC,
    DivContainerFormSC,
    InputFormSC,
    TextAreaFormSC,
    DivTitleInputSC,
    DivRowBoxInputTitleSC,
    TitleFormSC,
    BoxContentSC,
} from "./styles.form";
import ButtonWrapper from "../custom_button/index";

const Form = () => {
    type Input = {
        placeholder: string;
        title: string;
        name: string;
        type: string;
    };
    const [inputs, setInputs] = useState<Input[]>([
        { placeholder: "John", name: "name", type: "text", title: "Full name" },
        {
            placeholder: "example@mail.com",
            name: "email",
            type: "email",
            title: "Email",
        },
        {
            placeholder: "+123456789",
            name: "phone",
            type: "number",
            title: "Phone",
        },
    ]);

    return (
        <BoxContentSC>
            <DivContainerFormSC>
                <TitleFormSC>
                        Get in touch</TitleFormSC>
                <form
                    action="https://formsubmit.co/admin@cyberzenlabs.com"
                    method="POST"
                    encType="multipart/form-data"
                >
                    <DivBoxFormSC>
                        {inputs.map((input, i) => {
                            return (
                                <DivRowBoxInputTitleSC key={`derefda${i}`}>
                                    <DivTitleInputSC>{input.title}</DivTitleInputSC>
                                    <InputFormSC
                                        placeholder={input.placeholder}
                                        name={input.name}
                                        type={input.type}
                                        required
                                    ></InputFormSC>
                                </DivRowBoxInputTitleSC>
                            );
                        })}
                        <DivRowBoxInputTitleSC>
                            <DivTitleInputSC>Message</DivTitleInputSC>
                            <TextAreaFormSC
                                placeholder="How can we help you?"
                                name="message"
                                required
                            ></TextAreaFormSC>
                        </DivRowBoxInputTitleSC>
                        <ButtonWrapper
                            primary={true}
                            width={233}
                            directionRadius="right"
                            type="submit"
                        >
                            <span>Send message</span>
                        </ButtonWrapper>
                    </DivBoxFormSC>
                </form>
            </DivContainerFormSC>
        </BoxContentSC>
    );
};

export default Form;
