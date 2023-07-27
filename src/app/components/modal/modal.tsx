import React, { FC, useState, useEffect } from 'react';
import ButtonWrapper from '../custom_button';
import { RxCross2 } from "react-icons/rx";

type ModalProps = {
  isOpen: boolean;
  onClose: any;
  children: React.ReactNode;
  $minHeight?: string;
  $Height?: string;
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
import { BsPercent, BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs';
import "rc-slider/assets/index.css";
import plant8 from "../../images/plants8.png";
import plant7 from "../../images/plants7.jpg";
import plant6 from "../../images/plants6.png";
import plant5 from "../../images/plants5.png";
import plant4 from "../../images/plants4.png";
import plant3 from "../../images/plants3.png";
import plant2 from "../../images/plants2.png";
import plant1 from "../../images/plants1.png";
const refComponent = React.createRef();

const Modal: FC<ModalProps> = ({ isOpen, onClose, children, $minHeight, $Height }) => {

  if (!isOpen) {
    return null;
  }



  //width height for modal

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const [isFullPageForm, seIsFullPageForm] = useState(false);
  const [HeightContainer, seIsHeightContainer] = useState();

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    const heightContainer = refComponent.current?.getBoundingClientRect().height;
    seIsHeightContainer(`${heightContainer}px`);
    // console.log(HeightContainer, "HeightContainer");

    window.addEventListener('resize', handleResize);
    // console.log('innerWidth', width);
    // console.log('innerHeight ', height);
    
    if(height <= heightContainer){
      // console.log('worrr');

      seIsFullPageForm(true);
    } else{
      seIsFullPageForm(false);
    }

  }, [window.innerWidth, window.innerHeight]);


  //





  return (
    <DivBgContainerSC HeightContainer={HeightContainer} isFullPageForm={isFullPageForm}>
      <DivContentModal>
        <DivModalContainerSC isFullPageForm={isFullPageForm} ref={refComponent} $minHeight={$minHeight} $Height={$Height}>
        <DivClose onClick={onClose}><RxCross2 size={43} color="#201E1C"/></DivClose>

          {children}
        </DivModalContainerSC>
      </DivContentModal>
    </DivBgContainerSC>
  );
};

export default Modal;
