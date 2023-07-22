import ButtonWrapper from "../custom_button";
import ethImage from '../../images/eth_logo.svg';
import maticImg from '../../images/matic.svg';
import exchangeImg from '../../images/exchange.svg';
import { FC, useState } from "react";

import {
  DivSwapBlockSC,
  H3SwapBlockHeaderSC,
  DivSwapWrapperSC,
  DivSwapPaySC,
  DivSwapTextWrapperSC,
  PSwapBlockTextSC,
  PSwapBlockSumSC,
  DivSwapImgWrapperSC,
  DivForImgSC,
  PCaptionForImgSC,
  ButtonExchangeSC
} from './styles.SwapBlock'

interface Asset {
  text: string;
  sum: number;
  imagePath: string;
  caption: string;
}
const SwapBlock = () => {
  const [payment, setPayment] = useState<Asset>({ text: "You pay", sum: 100, imagePath: ethImage.src, caption: "Earthy" });
  const [receipt, setReceipt] = useState<Asset>({ text: "You receive", sum: 20, imagePath: maticImg.src, caption: "Matic" });
  
  const Swap = () => {
    const previousPayment = payment;
    const previousReceipt = receipt;
  
    setPayment(previousReceipt);
    setReceipt(previousPayment);
  };
  return (
    <DivSwapBlockSC>
      <H3SwapBlockHeaderSC>Swap</H3SwapBlockHeaderSC>
      <DivSwapWrapperSC>
        <DivSwapPaySC>
          <DivSwapTextWrapperSC>
            <PSwapBlockTextSC>{payment.text}</PSwapBlockTextSC>
            <PSwapBlockSumSC>{payment.sum}</PSwapBlockSumSC>
          </DivSwapTextWrapperSC>
          <DivSwapImgWrapperSC>
            <DivForImgSC path={payment.imagePath}></DivForImgSC>
            <PCaptionForImgSC>{payment.caption}</PCaptionForImgSC>
          </DivSwapImgWrapperSC>
        </DivSwapPaySC>

        <DivSwapPaySC>
          <DivSwapTextWrapperSC>
            <PSwapBlockTextSC>{receipt.text}</PSwapBlockTextSC>
            <PSwapBlockSumSC>{receipt.sum}</PSwapBlockSumSC>
          </DivSwapTextWrapperSC>
          <DivSwapImgWrapperSC>
            <DivForImgSC path={receipt.imagePath}></DivForImgSC>
            <PCaptionForImgSC>{receipt.caption}</PCaptionForImgSC>
          </DivSwapImgWrapperSC>
        </DivSwapPaySC>

        <ButtonExchangeSC onClick={Swap} path={exchangeImg.src}></ButtonExchangeSC>            </DivSwapWrapperSC>
      <ButtonWrapper
        width={292}
        height={64}
        directionRadius={"center"}
        primary={true}>
        <span>Swap</span>
      </ButtonWrapper>
    </DivSwapBlockSC>
  )
};

export default SwapBlock;
