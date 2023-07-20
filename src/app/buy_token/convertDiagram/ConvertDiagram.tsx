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
          <PConvertDiagramTextSC>1000 <PConvertDiagramCaptionSC>Earthy tokens</PConvertDiagramCaptionSC></PConvertDiagramTextSC>
          </DivConvertDiagramLeftTextContainerSC>
      <DivConvertDiagramLeftLogoSC path={earthyLogo.src}></DivConvertDiagramLeftLogoSC>
      </DivConvertDiagramTokensSC>

      <DivConvertDiagramChainsSC>
        <DivRoundConvertDiagramSmallSC></DivRoundConvertDiagramSmallSC>
          <DivConvertDiagramRightTextContainerSC>
          <PConvertDiagramTextSC>200 <PConvertDiagramCaptionSC>Earthy Chain</PConvertDiagramCaptionSC></PConvertDiagramTextSC>
          </DivConvertDiagramRightTextContainerSC>
      <DivConvertDiagramRightLogoSC path={earthyLogo.src}></DivConvertDiagramRightLogoSC>
      </DivConvertDiagramChainsSC>

      <DivConvertDiagramArrowSC path={arrowRight.src}></DivConvertDiagramArrowSC>
    </DivConvertDiagramWrapperSC>
  )
}

export default ConvertDiagram;