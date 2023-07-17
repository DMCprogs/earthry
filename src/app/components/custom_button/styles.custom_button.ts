"use client";
import { styled } from "styled-components";

export const ButtonWrapperSC = styled.button<{
  width: number;
  $weight: number;
  height: number;
  $primary: boolean;
  $directionRadius: string;
  disabled: boolean;
  $colorButton: string;
}>`
  display: grid;
  width: ${({ width }) => width}px;
  height: ${({ height }) => (height ? height : `74`)}px;
  background: ${({ $primary, $colorButton }) =>
    $primary ? ($colorButton ? $colorButton : "#195946") : "transparent"};
  border: ${({ $primary, $colorButton }) =>
    $primary ? "none" : $colorButton ? $colorButton : "2px solid #201E1C"};
  font-family: "Montserrat";
  font-style: normal;
  font-weight: ${({ $weight }) => ($weight ? $weight : `600`)};
  font-size: 20px;
  line-height: 24px;
  /* identical to box height, or 120% */
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  letter-spacing: 0.2px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  &:hover {
    background: ${({ $primary, $colorButton }) =>
    $primary ? ($colorButton ? '#464646' : "rgba(25, 89, 70, 0.75)") : "rgba(0, 175, 121, 0.45);"};
  }

  &:active {
    background: ${({ $primary, $colorButton }) =>
    $primary ? ($colorButton ? '#646464' : "rgba(25, 89, 70, 0.5)") : "rgba(0, 175, 121, 0.25)"};
  }
  color: ${({ $primary }) => ($primary ? "white" : "#201E1C")};
  justify-items: center;

  align-items: center;
  ${({ $directionRadius }) =>
    $directionRadius === "left"
      ? `border-top-left-radius: 30px 30px;
  border-bottom-left-radius: 30px 30px;`
      : $directionRadius === "center" ?`border-radius: 25px`
      : $directionRadius === "ltr" ? `border-radius: 0px 35px`
      : $directionRadius === "rtr" ? `border-radius: 35px 0px`
      : `border-top-right-radius: 30px 30px;
  border-bottom-right-radius: 30px 30px;`}


`;








