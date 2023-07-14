"use client";
import React, { FC, ReactElement } from "react";

import { ButtonWrapperSC } from "@/app/components/custom_button/styles.custom_button";

const ButtonWrapper: FC<{
  children?: ReactElement;
  weight?: number;
  width: number;
  height?: number;
  colorButton?: string;
  primary?: boolean;
  directionRadius: string;
  onClick?: () => void | null;
  disabled?: boolean;
  type?: string | null;
}> = (props) => {
  const {
    children,
    width,
    weight = 600,
    height = 50,
    colorButton = "",
    primary = false,
    directionRadius,
    onClick = null,
    disabled = false,
    type = null,
  } = props;

  const _onClick = (e: any) => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <ButtonWrapperSC
      height={height}
      width={width}
      weight={weight}
      primary={primary}
      colorButton={colorButton}
      directionRadius={directionRadius}
      onClick={_onClick}
      disabled={disabled}
    >
      {children}
    </ButtonWrapperSC>
  );
};

export default ButtonWrapper;
