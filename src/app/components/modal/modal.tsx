import React, { FC,useState } from 'react';
import ButtonWrapper from '../custom_button';
type ModalProps = {
    isOpen:boolean;
    onClose:any;
  
  }
  import { 
    DivModalContainerSC,
    DivBgContainerSC,
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
    DivContentModal,
    DivClose,
 } from "./styles.modal";
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
  const Modal: FC<ModalProps> = ({ isOpen,onClose }) => {
    const [trackData, setTrackData] = useState(1);
    const [amount, setAmount] = useState(1 * 40);
  if (!isOpen) {
    return null;
  }
  const plantImages = [plant1, plant2, plant3, plant4, plant5, plant6, plant7, plant8];
  const plants = [];
for (let i = 0; i < 8; i++) {
  plants.push(<DivPlantsImgSC $images={plantImages[i]} key={i}></DivPlantsImgSC>);
}
  const marks = {
    1: <DivMarksSC>1%</DivMarksSC>,
    8: <DivMarksSC>8%</DivMarksSC>,
  };
  const handleChange = (e: any) => {
    setTrackData(e);
    setAmount(e * 40);
  };
  const Percen = (e: any) => {
    const inputValue = parseInt(e.target.value);
  
    if(isNaN(inputValue)) {
        // Не устанавливайте значение, если введенное значение не является числом
        return;
    }

    if(inputValue < 1) {
        setTrackData(1);
    } else if(inputValue > 8) {
        setTrackData(8);
    } else {
        setTrackData(inputValue);
        setAmount(inputValue * 40);
    }
}
const Minus = () => {
    if(trackData<=1){
        return
    }
    else{
        setTrackData(trackData-1);
    }
}
const Plus = () => {
    if(trackData>=8){
        return
    }
    else{
        setTrackData(trackData+1);
    }
    
}



  return (
    <DivBgContainerSC>
          <DivContentModal>
          <DivClose  onClick={onClose}>X</DivClose>
      <DivModalContainerSC>
      
      
        <DivContainerGrafic>
          <DivTexStacingSC>Select the percentage of APY  to maintain the project (min 1%)</DivTexStacingSC>
          <DivHeightfixSC>
                <DivNumberBoxSC>{amount}</DivNumberBoxSC>
                <DivSliderSC>
                  <Slider
                    min={1}
                    max={8}
                    defaultValue={trackData}
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
        <DivTexStacingSC style={{fontSize:'18px'}}>Select the percentage of APY  to maintain the project (min 1%)</DivTexStacingSC>
        <div style={{display:'flex',alignItems:'center'}}><InputPercent  onChange={Percen} ><DivContainer>{trackData} <div style={{display:'flex', flexDirection:'column',gap:'5px',}}><DivPlus onClick={Plus}><BsArrowUpShort size={20}/></DivPlus> <DiMunus onClick={Minus}><BsArrowDownShort size={20}/></DiMunus></div></DivContainer></InputPercent><BsPercent size={28}/></div>
        </DivContainerInput>
        <DivContainerInput>
        <DivTexStacingSC  style={{fontSize:'18px'}}>You donate to the project in the project</DivTexStacingSC>
        <div style={{display:'flex'}}><InputPercent  >{amount} </InputPercent><DivText>Earthy tokens</DivText></div>
       
        </DivContainerInput>
       </DivContainerGrafic2>
        <DivContainerPlantSC>
        {plants.map((plant, index) => (
    <div style={{opacity: trackData === index + 1 ? 1 : 0.6}}>
      {plant}
    </div>
  ))}
        </DivContainerPlantSC>
        <ButtonWrapper
            directionRadius="center"
            primary={true}
            height={74}
            width={190}
          >
            <span> Stake now </span>
          </ButtonWrapper>
      </DivModalContainerSC>
      </DivContentModal>
    </DivBgContainerSC>
  );
};

export default Modal;
