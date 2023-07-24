/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import { DivDefaultContainerSC } from "../styles.page";
import {
  DivRowsWrapSC,
  TitleNonProfitSC,
  DivColumnsContentSC,
  ImageDocEcologySC,
  DivBoldTextSC,
  DivNormalTextSC,
  ImageEcologySC,
  ImagePeopleEcologySC,
  DivBoxButtonNPSC
} from "./styles.non_profit1";
import ecology from "../images/ecology.jpg";
import doc_ecology from "../images/doc_ecology.jpg";
import people_ecology from "../images/people_ecology.jpg";
import Link from "next/link";
import ButtonWrapper from "@/app/components/custom_button";
import {DivBoxButtonSC} from "@/app/components/section4/styles.ways_to_achieve";
const Non_profit1 = () => {
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    window.onload = handleResize;
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  return (
    <DivDefaultContainerSC>
      <DivRowsWrapSC>
        <TitleNonProfitSC>
          Non-profit adaptation of environmental and charitable projects.
        </TitleNonProfitSC>
        {width >= 900 ? (
          <DivColumnsContentSC>
            <ImageEcologySC path={ecology.src} alt="ecology" />
            <DivBoldTextSC>
              The onboarding process is designed to ensure that all
              organizations listed on the Earthy platform are trustworthy and
              committed to making a positive impact on the world.
            </DivBoldTextSC>
          </DivColumnsContentSC>
        ) : (
          <DivColumnsContentSC>
            <DivBoldTextSC>
              The onboarding process is designed to ensure that all
              organizations listed on the Earthy platform are trustworthy and
              committed to making a positive impact on the world.
            </DivBoldTextSC>
            <ImageEcologySC path={ecology.src} alt="ecology" />
          </DivColumnsContentSC>
        )}
        <DivBoxButtonNPSC>
        <Link style={{ width: "fit-content" }} href={"https://forms.gle/fxEcSnhQArMr4WW9A"}>
          <ButtonWrapper
              directionRadius={"center"}
              width={200}
              height={74}
              primary={true}
          >
            <span>Open form</span>
          </ButtonWrapper>
        </Link>
        </DivBoxButtonNPSC>
        <DivColumnsContentSC>
          <DivNormalTextSC>
            1.  Non-profit organizations interested in registering and listing
            on the platform must fill out an application form, providing
            information about their mission, goals and activities.
          </DivNormalTextSC>
          <DivNormalTextSC>
            2. Background checks: Our team conducts a thorough background check
            on an organization to ensure its legitimacy and reputation. This
            includes checking for any past disagreements or issues that could
            undermine the organization's credibility.
          </DivNormalTextSC>
        </DivColumnsContentSC>
        <DivNormalTextSC>
          3. Project Proposal: Once an application is approved, a non-profit
          organization must submit a project proposal outlining the specific
          initiatives or programs they would like to implement using the funds
          raised through the platform. This proposal must be in line with
          Earthy's mission and values and demonstrate the organization's
          commitment to making a positive impact on the world.
        </DivNormalTextSC>
        <ImageDocEcologySC path={doc_ecology.src} alt="ecology" />
        <DivColumnsContentSC>
          <DivNormalTextSC>
            4. Review: Our review committee will evaluate the project proposal
            and organization background information to determine if it meets the
            criteria for listing on the platform.
          </DivNormalTextSC>
          <DivNormalTextSC>
            5. Approval: If a non-profit organization is approved, it will be
            registered on the platform and will be able to start receiving
            support from the community through the staking of Earthy tokens.
          </DivNormalTextSC>
        </DivColumnsContentSC>
        <DivBoxButtonNPSC>
        <Link style={{ width: "fit-content" }} href={"https://forms.gle/fxEcSnhQArMr4WW9A"}>
          <ButtonWrapper
              directionRadius={"center"}
              width={200}
              height={74}
              primary={true}
          >
            <span>Open form</span>
          </ButtonWrapper>
        </Link>
        </DivBoxButtonNPSC>
        <ImagePeopleEcologySC path={people_ecology.src} alt="ecology" />
        <DivBoldTextSC $positionText={"center"}>
          By investing their Earthy tokens in these organizations, the community
          can be sure that they are supporting initiatives that are in line with
          transparent values and beliefs.
        </DivBoldTextSC>
      </DivRowsWrapSC>
    </DivDefaultContainerSC>
  );
};

export default Non_profit1;
