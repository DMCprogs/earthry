import React, { ReactElement } from "react";
import {
  DivContentSC,
  DivOneRowSC,
  DivTitleSC,
  DivWrapSucсessSC,
} from "../styles.airdrop";
import ButtonWrapper from "@/app/components/custom_button";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";

const Success = () => {
  return (
    <DivWrapSucсessSC>
      <DivContentSC style={{ maxWidth: "1000px" }}>
        <DivTitleSC>You have successfully registered!</DivTitleSC>
        <Link href="/">
          <ButtonWrapper
            width={360}
            height={74}
            directionRadius={"center"}
            primary={true}
          >
            <DivOneRowSC>
              <AiOutlineArrowLeft color={"white"} size={20} /> Back to the home
              page
            </DivOneRowSC>
          </ButtonWrapper>
        </Link>
      </DivContentSC>
    </DivWrapSucсessSC>
  );
};

export default Success;
