"use client";
import {
    DivStepsWrapperSC,
    H2StepsTitleSC,
    DivStepContainerSC,
    DivStepsBlockSC,
    H3StepTitleSC,
    PStepTextSC
} from './styles.StepsBuyToken';

const StepsBuyToken = () => {
  return (
    <DivStepsWrapperSC>
        <H2StepsTitleSC>How to buy Earthy token?</H2StepsTitleSC>
        <DivStepsBlockSC>
            <DivStepContainerSC>
                <H3StepTitleSC>Step 1</H3StepTitleSC>
                <PStepTextSC>Set up a compatible wallet, such as MetaMask or Trust Wallet, and download it onto your device.</PStepTextSC>
            </DivStepContainerSC>
            <DivStepContainerSC>
                <H3StepTitleSC>Step 2</H3StepTitleSC>
                <PStepTextSC>Purchase Ethereum (ETH) on a cryptocurrency exchange and transfer it to your wallet.</PStepTextSC>
            </DivStepContainerSC>            
            <DivStepContainerSC>
                <H3StepTitleSC>Step 3</H3StepTitleSC>
                <PStepTextSC>Connect your wallet to a decentralized exchange like Uniswap.</PStepTextSC>
            </DivStepContainerSC>
            <DivStepContainerSC>
                <H3StepTitleSC>Step 4</H3StepTitleSC>
                <PStepTextSC>Select Earthy Token as the desired token and enter the amount you wish to purchase.</PStepTextSC>
            </DivStepContainerSC>
            <DivStepContainerSC>
                <H3StepTitleSC>Step 5</H3StepTitleSC>
                <PStepTextSC>Double-check the transaction details, confirm the swap and you’re all set!</PStepTextSC>
            </DivStepContainerSC>
        </DivStepsBlockSC>
    </DivStepsWrapperSC>
  )
}

export default StepsBuyToken