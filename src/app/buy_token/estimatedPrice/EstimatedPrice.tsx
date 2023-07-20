import earthyLogo from '../../images/eth_logo.svg';

import {
    DivEstimatedPriceWrapperSC,
    H2EstimatedPriceTitileSC,
    DivEstimatedPriceContainerSC,
    DivEstimatedPriceLogoSC,
    PEstimatedPriceContainerTitleSC,
    DivEstimatedPriceTitleContainerSC,
    SpanEstimatedPriceContainerTitleBoldSC,
    PEthValueSC,
    PDollarValueSC
} from './styles.EstimatedPrice';

const EstimatedPrice = () => {
  return (
    <DivEstimatedPriceWrapperSC>
        <H2EstimatedPriceTitileSC>ICO</H2EstimatedPriceTitileSC>
        <DivEstimatedPriceContainerSC>
            <DivEstimatedPriceTitleContainerSC>
                <DivEstimatedPriceLogoSC path={earthyLogo.src}></DivEstimatedPriceLogoSC>
                <PEstimatedPriceContainerTitleSC>Estimated price of the <SpanEstimatedPriceContainerTitleBoldSC>Earthy token:</SpanEstimatedPriceContainerTitleBoldSC></PEstimatedPriceContainerTitleSC>
            </DivEstimatedPriceTitleContainerSC>
            <PEthValueSC>0.85 ETH</PEthValueSC>
            <PDollarValueSC>$1 575.63</PDollarValueSC>
        </DivEstimatedPriceContainerSC>
    </DivEstimatedPriceWrapperSC>
  )
}

export default EstimatedPrice