"use client";
import React, { useState } from "react";
import {
  DivBoxFormSC,
  DivRowBoxInputTitleSC,
  DivTitleInputSC,
  InputFormSC,
} from "./styles.airdrop";
import { FaStarOfLife } from "react-icons/fa";

const Form = () => {
  type Input = {
    placeholder: string;
    title: string;
    name: string;
    type: string;
  };
  const [inputs, setInputs] = useState<Input[]>([
    {
      placeholder: "example@mail.com",
      name: "email",
      type: "email",
      title: "Email",
    },
    {
      placeholder: "John",
      name: "address",
      type: "text",
      title: "Crypto wallet address",
    },
    {
      placeholder: "+123456789",
      name: "phone",
      type: "text",
      title: "Phone",
    },
  ]);

  return (
    <>
      <form method="POST" encType="multipart/form-data">
        <DivBoxFormSC>
          {inputs.map((input, i) => {
            return (
              <DivRowBoxInputTitleSC key={`derefda${i}`}>
                <DivTitleInputSC>{input.title}<FaStarOfLife size={12} color="#195946"/></DivTitleInputSC>
                <InputFormSC
                  placeholder={input.placeholder}
                  name={input.name}
                  type={input.type}
                  required
                ></InputFormSC>
              </DivRowBoxInputTitleSC>
            );
          })}
        </DivBoxFormSC>
      </form>
    </>
  );
};

export default Form;
