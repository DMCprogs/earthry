import styled from "styled-components";

export const DivChainConvertWrapperSC = styled.div`
    display: flex;
    flex-direction: column;
    gap: 41px;
    position: relative;
    max-width: 292px;
    width: 100%;
    position: relative;
    margin: 0 auto;
`;

export const DivChainConvertBlockSC = styled.div`
    border: 2px solid #a6a6a6;
    height: 97px;
    border-radius: 8px;
    display: grid;
    grid-template-columns: 197px 93px;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const PChainConvertTextSC = styled.p`
    color: #111;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 145.02%;
`;

export const PChainConvertValueSC = styled.p`
    color: #969696;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export const DivChainConvertArrowSC = styled.div<{
    path: string;
  }>`
    width: 16px;
    height: 19px;
    background-image: url(${({ path }) => path});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    left: calc(50% - 8px);
    top: calc(50% - 9px);
  `;