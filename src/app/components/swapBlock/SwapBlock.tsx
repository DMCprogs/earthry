import ButtonWrapper from "../custom_button";
import ethImage from '../../images/eth_logo.svg';
import maticImg from '../../images/matic.svg';
import exchangeImg from '../../images/exchange.svg';

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

const SwapBlock = () => {
    return (
        <DivSwapBlockSC>
            <H3SwapBlockHeaderSC>Swap</H3SwapBlockHeaderSC>
            <DivSwapWrapperSC>
                <DivSwapPaySC>
                    <DivSwapTextWrapperSC>
                        <PSwapBlockTextSC>You pay</PSwapBlockTextSC>
                        <PSwapBlockSumSC>100</PSwapBlockSumSC>
                    </DivSwapTextWrapperSC>
                    <DivSwapImgWrapperSC>
                        <DivForImgSC path={ethImage.src}></DivForImgSC>
                        <PCaptionForImgSC>Earthy</PCaptionForImgSC>
                    </DivSwapImgWrapperSC>
                </DivSwapPaySC>
                <DivSwapPaySC>
                    <DivSwapTextWrapperSC>
                        <PSwapBlockTextSC>You receive</PSwapBlockTextSC>
                        <PSwapBlockSumSC>20</PSwapBlockSumSC>
                    </DivSwapTextWrapperSC>
                    <DivSwapImgWrapperSC>
                        <DivForImgSC path={maticImg.src}></DivForImgSC>
                        <PCaptionForImgSC>Matic</PCaptionForImgSC>
                    </DivSwapImgWrapperSC>
                </DivSwapPaySC>
                <ButtonExchangeSC path={exchangeImg.src}></ButtonExchangeSC>
            </DivSwapWrapperSC>
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
  