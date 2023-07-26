import React, { FC,useState } from 'react';
import ButtonWrapper from '../custom_button';
type ModalProps = {
  Profits:number
  }
  import { 
   
    DivContainerGrafic,
    DivTexStacingSC,
    DivHeightfixSC,
    DivNumberBoxSC,
    DivSliderSC,
    DivMarksSC,
    DivContainerPlantSC,
    DivPlantsImgSC,
    DivContainerGrafic2,
    DivContainerInput,
    InputPercent,
    DivText,
    DivPlus,
    DiMunus,
    DivContainer,
    DivModalContainerSC,
    DivNumbers,
    Body,
    DivContainer2,
    InputPercent2,
    DivNumbers2
 } from "./styles.modalProject";
 import Slider from "rc-slider";
 import { BsPercent,BsArrowDownShort,BsArrowUpShort } from 'react-icons/bs';
import "rc-slider/assets/index.css";
import plant8 from"../../images/plants8.png";
import plant7 from"../../images/plants7.jpg";
import plant6 from"../../images/plants6.png";
import plant5 from"../../images/plants5.png";
import plant4 from"../../images/plants4.png";
import plant3 from"../../images/plants3.png";
import plant2 from"../../images/plants2.png";
import plant1 from"../../images/plants1.png";
import { DivCourceTitleImgSC } from '@/app/buy_token/earthyCourse/styles.EarthyCourse';
import courceImg from '../../images/eth_logo.svg';
import "./style.css";
  const ModalProject: FC<ModalProps> = ({Profits }) => {
    const round = (Profits: number) => {
        return  +Profits.toFixed(2);
    };
    let profit= Profits/8;
    let AllProfit=Profits;
    let income=round(profit);
    const [trackDatas, setTrackDatas] = useState(1);
    const [amount, setAmount] = useState(income);
    const pit = (trackDatas: number) => {
        const plantImages = [
            plant1,
            plant2,
            plant3,
            plant4,
            plant5,
            plant6,
            plant7,
            plant8,
        ];
        const plants = [];
        for (let i = 0; i < 8; i++) {
            plants.push(
                <DivPlantsImgSC $images={plantImages[i]} key={i}></DivPlantsImgSC>
            );
        }
        return plants.map((plant, index) => (
            <div style={{opacity: trackDatas === index + 1 ? 1 : 0.6}} key={index}>
                {plant}
            </div>
        ));
    };

    const marks = {
        1: <DivMarksSC>1%</DivMarksSC>,
        8: <DivMarksSC>8%</DivMarksSC>,
    };
    const handleChange = (e: any) => {
        setTrackDatas(e);
        setAmount(e * income);
    };
    const Percen = (e: any) => {
        const inputValue = parseInt(e.target.value);

        if (isNaN(inputValue)) {
            // Не устанавливайте значение, если введенное значение не является числом
            return;
        }

        if (inputValue < 1) {
            setTrackDatas(1);
        } else if (inputValue > 8) {
            setTrackDatas(8);
        } else {
            setTrackDatas(inputValue);
            setAmount(inputValue * profit);
        }
    };
    const Minus = () => {
        if (trackDatas <= 1) {
            return;
        } else {
            setTrackDatas(trackDatas - 1);
            let munis=amount - income
            setAmount(round(munis));
        }
    };
    const Plus = () => {
        if (trackDatas >= 8) {
            return;
        } else {
            setTrackDatas(trackDatas + 1);
            let sum=amount + income;
            setAmount(round(sum));
        }
    };
    const MinusTokens = () => {
        if (amount <= income) {
            return;
        } else {
            setTrackDatas(trackDatas - 1);
            let munis=amount - income
            setAmount(round(munis));
        }
    };
    const PlusTokens = () => {
        if (amount >=round(AllProfit) ) {
            return;
        } else {
            setTrackDatas(trackDatas + 1);
            let sum=amount + income;
            setAmount(round(sum));
        }
    };
  
 



  return (
 
   <DivModalContainerSC>   <DivContainerGrafic>
   <DivTexStacingSC>
       Select the percentage of APY to maintain the project (min 1%)
   </DivTexStacingSC>
   <DivHeightfixSC>
       <DivNumberBoxSC><DivCourceTitleImgSC path={courceImg.src}></DivCourceTitleImgSC><div>{amount}</div></DivNumberBoxSC>
       <DivSliderSC>
           <Slider
               min={1}
               max={8}
               defaultValue={trackDatas}
               marks={marks}
               handleStyle={{
                   borderColor: "grey",
                   height: 25,
                   width: 25,
                   marginLeft: -10,
                   marginTop: -10,
                   backgroundColor: "white",
               }}
               trackStyle={{
                   backgroundColor: "#00AF88",
                   height: 8,
                   marginTop: -2,
               }}
               railStyle={{
                   backgroundColor: "#04896C",
                   height: 8,
                   marginTop: -2,
               }}
               onChange={handleChange}
           />
       </DivSliderSC>
   </DivHeightfixSC>
</DivContainerGrafic>
<DivContainerGrafic2>
   <DivContainerInput>

       <DivTexStacingSC style={{ fontSize: '18px' }}>Select the percentage of APY  to maintain the project (min 1%)</DivTexStacingSC>
       <div style={{ display: 'flex', alignItems: 'center',gap: '10px' }}><InputPercent onChange={Percen} ><DivContainer><DivNumbers>{trackDatas}</DivNumbers>
       <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', }}><DivPlus onClick={Plus}><BsArrowUpShort size={20} /></DivPlus> 
       <DiMunus onClick={Minus}><BsArrowDownShort size={20} /></DiMunus></div></DivContainer></InputPercent><BsPercent size={28} /></div>
   </DivContainerInput>
   <DivContainerInput>
       <DivTexStacingSC style={{ fontSize: '18px' }}>You donate to the project in the project</DivTexStacingSC>

       <div style={{ display: 'flex', alignItems: 'center',gap: '10px' }}><InputPercent2 onChange={Percen} ><DivContainer2><DivNumbers2>{amount}</DivNumbers2>
       <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', }}><DivPlus onClick={PlusTokens}><BsArrowUpShort size={20} /></DivPlus> 
       <DiMunus onClick={MinusTokens}><BsArrowDownShort size={20} /></DiMunus></div></DivContainer2></InputPercent2><DivText>Earthy tokens</DivText></div>
       


   </DivContainerInput>
</DivContainerGrafic2>
<DivContainerPlantSC>{pit(trackDatas)}</DivContainerPlantSC>
<ButtonWrapper
   directionRadius="center"
   primary={true}
   height={74}
   width={190}
>
   <span> Stake now </span>
</ButtonWrapper> </DivModalContainerSC>
  );
};

export default ModalProject;
