import {
    DivConvertDiagramWrapperSC,
    DivConvertDiagramTokensSC,
    DivConvertDiagramChainsSC,
    DivRoundConvertDiagramBigSC,
    DivRoundConvertDiagramSmallSC,
    DivConvertDiagramLeftTextContainerSC,
    PConvertDiagramTextSC,
    PConvertDiagramCaptionSC,
    DivConvertDiagramRightTextContainerSC,
    DivConvertDiagramLeftLogoSC,
    DivConvertDiagramRightLogoSC,
    DivConvertDiagramArrowSC
} from './styles.convertDiagram';

import earthyLogo from '../../images/eth_logo.svg';
import arrowRight from '../../images/rightArrow.svg';

const ConvertDiagram = () => {
    return (
        <DivConvertDiagramWrapperSC>
            <DivConvertDiagramTokensSC>
                <DivRoundConvertDiagramBigSC></DivRoundConvertDiagramBigSC>
                <DivConvertDiagramLeftTextContainerSC>
                    <DivConvertDiagramLeftLogoSC path={earthyLogo.src}></DivConvertDiagramLeftLogoSC>
                    <PConvertDiagramTextSC>1000 <PConvertDiagramCaptionSC>Earthy
                        tokens</PConvertDiagramCaptionSC></PConvertDiagramTextSC>
                </DivConvertDiagramLeftTextContainerSC>
                
            </DivConvertDiagramTokensSC>

            <DivConvertDiagramChainsSC>
                <DivRoundConvertDiagramSmallSC></DivRoundConvertDiagramSmallSC>
                <DivConvertDiagramRightTextContainerSC>
                <DivConvertDiagramRightLogoSC path={earthyLogo.src}></DivConvertDiagramRightLogoSC>
                    <PConvertDiagramTextSC>200 <PConvertDiagramCaptionSC>Earthy
                        Chain</PConvertDiagramCaptionSC></PConvertDiagramTextSC>
                </DivConvertDiagramRightTextContainerSC>

            </DivConvertDiagramChainsSC>

            <DivConvertDiagramArrowSC path={arrowRight.src}></DivConvertDiagramArrowSC>

        </DivConvertDiagramWrapperSC>
    )
}

export default ConvertDiagram;