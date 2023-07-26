import React, {FC, useState} from 'react';
import ButtonWrapper from '../custom_button';

type ModalProps = {
    isOpen: boolean;
    onClose: any;
    children: React.ReactNode;
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
import {BsPercent, BsArrowDownShort, BsArrowUpShort} from 'react-icons/bs';
import "rc-slider/assets/index.css";
import plant8 from "../../images/plants8.png";
import plant7 from "../../images/plants7.jpg";
import plant6 from "../../images/plants6.png";
import plant5 from "../../images/plants5.png";
import plant4 from "../../images/plants4.png";
import plant3 from "../../images/plants3.png";
import plant2 from "../../images/plants2.png";
import plant1 from "../../images/plants1.png";

const Modal: FC<ModalProps> = ({isOpen, onClose, children}) => {

    if (!isOpen) {
        return null;
    }


    return (
        <DivBgContainerSC>
            <DivContentModal>
                <DivClose onClick={onClose}>X</DivClose>
                <DivModalContainerSC>
                    {children}
                </DivModalContainerSC>
            </DivContentModal>
        </DivBgContainerSC>
    );
};

export default Modal;
