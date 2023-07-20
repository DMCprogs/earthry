"use client";
import styled, { css, keyframes } from "styled-components";
import { HiOutlinePlus } from "react-icons/hi";

export const DivFAQContainerSC = styled.div`
color: #201E1C;
  width: 100%;
  height: max-content;
  padding: 20px 0;
  /* display: grid; */
  border-bottom: 1px solid #646464;
  font-weight: 500;
  font-size: 24px;
  font-family: "Montserrat";
  /* grid-template-columns: auto max-content;
    column-gap: 30px; */
`;

export const DivIconBoxSC = styled.div`
  height: max-content;
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const IconPlusSC = styled(HiOutlinePlus)<{   $hide: boolean }>`
  height: 30px;
  width: 30px;
  ${({ $hide }) =>
    !$hide
      ? css`
          transform: rotate(45deg);
        `
      : null}
  transition-duration: .8s;
`;

export const DivQuestionSC = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  h3 {
    font-weight: 500;
    font-size: clamp(20px, 2.5vw, 24px);
  }
`;

const fade = keyframes`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0px);
    }
`;

export const DivAnswerSC = styled.div<{ $hide?: boolean }>`
  display: grid;
  ${({ $hide }) =>
    $hide
      ? css`
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.7s ease;
        `
      : css`
          grid-template-rows: 1fr;
          animation: ${fade} 1s ease-in-out;
          transition: grid-template-rows 1s ease;
        `}
  overflow: hidden;

  p {
    font-weight: 400;
    font-size: clamp(18px, 2.5vw, 22px);
    padding-top: 15px;
    line-height: 1.4;
  }

  br {
    margin-bottom: 5px;
  }
`;
