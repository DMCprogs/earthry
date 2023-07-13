"use client";
import { FC } from "react";
import Link from "next/link";
import{
    ButtonJoinSC,
    
  } from "./styles.button";

const ButtonGreen: FC = () => (
    <div style={{width:'100%',height:'100%',display:'grid',justifyItems:'center'}}> 
    <ButtonJoinSC>You text </ButtonJoinSC>
     </div>
);

export default ButtonGreen;
