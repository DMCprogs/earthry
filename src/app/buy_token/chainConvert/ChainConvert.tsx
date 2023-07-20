import {
    DivChainConvertWrapperSC,
    DivChainConvertBlockSC,
    PChainConvertTextSC,
    PChainConvertValueSC,
    DivChainConvertArrowSC
} from './styles.ChainConvert';

import convertArrowImg from '../../images/convertArrow.svg'

const ChainConvert = () => {
  return (
    <DivChainConvertWrapperSC>
        <DivChainConvertBlockSC>
            <PChainConvertTextSC>Earthy token (Now)</PChainConvertTextSC>
            <PChainConvertValueSC>100</PChainConvertValueSC>
        </DivChainConvertBlockSC>
        <DivChainConvertBlockSC>
            <PChainConvertTextSC>Earthy Chain (After the launch)</PChainConvertTextSC>
            <PChainConvertValueSC>20</PChainConvertValueSC>
        </DivChainConvertBlockSC>
        <DivChainConvertArrowSC path={convertArrowImg.src}></DivChainConvertArrowSC>
    </DivChainConvertWrapperSC>
  )
}

export default ChainConvert;