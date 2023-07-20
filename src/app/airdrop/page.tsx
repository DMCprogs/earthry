import React, { ReactElement } from "react";
import {
  DivContentSC,
  DivFormWrapSC,
  DivOneRowSC,
  DivTextSC,
  DivTitleSC,
  DivWrapSC,
} from "./styles.airdrop";
import Link from "next/link";
import ButtonWrapper from "../components/custom_button";
import Form from "./form";

const AirDrop = () => {
  return (
    <DivWrapSC>
      <DivContentSC style={{ maxWidth: "608px" }}>
        <DivTitleSC>Airdrop</DivTitleSC>
        <DivTextSC style={{ textAlign: "center" }}>
          To qualify for an airdrop, a user must register with a permanent email
          address.
        </DivTextSC>
        <DivFormWrapSC>
          <Form />
        </DivFormWrapSC>
        <Link href="/airdrop/success">
          <ButtonWrapper
            width={221}
            height={74}
            directionRadius={"center"}
            primary={true}
          >
            <DivOneRowSC>Register Now</DivOneRowSC>
          </ButtonWrapper>
        </Link>
        <DivTextSC style={{ textAlign: "left" }}>
          Once verified, one Earthy Chain token will be reset to an account that
          is locked out for 360 days. After this period, the token will be
          unlocked, allowing their holders to trade, stake or hold them as they
          see fit.
        </DivTextSC>
      </DivContentSC>
    </DivWrapSC>
  );
};

export default AirDrop;
