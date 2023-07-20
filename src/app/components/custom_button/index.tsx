"use client";
import React, { FC, ReactElement } from "react";

import { ButtonWrapperSC } from "@/app/components/custom_button/styles.custom_button";
import Link from "next/link";

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
  styles?: any;
  id?: string;

}> = (props) => {
  const {
    styles,
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
    id,
  } = props;

  const _onClick = (e: any) => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <ButtonWrapperSC 
      style={styles}
      height={height}
      width={width}
      $weight={weight}
      $primary={primary}
      $colorButton={colorButton}
      $directionRadius={directionRadius}
      onClick={_onClick}
      disabled={disabled}
      id={id}
    >
      {children}
    </ButtonWrapperSC>
  );
};

export default ButtonWrapper;
