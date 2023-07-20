'use client'
import React, {useEffect, useState} from 'react';
import {
    DivItemTextSC,
    DivWrapperImageSC,
    DivWrapperItemProjectsSC, DivWrapperText2SC, DivWrapperTextAndImageSC,
    DivWrapperTextSC, SpanBolderTextSC, SpanDefaultTextSC, SpanTextButtonSC
} from "@/app/components/projects_list/styles.projects_list";
import Image from '../../images/BlogDetail.jpg'
import ButtonWrapper from "@/app/components/custom_button";
const ItemProjects = () => {
    const [
        dataLayout,
        setData
    ] = useState({
        w: 0,
        h: 0
    })

    useEffect(() => {
        setData({
            w: window.outerWidth,
            h: window.outerHeight
        })
        window.addEventListener('resize', resize)
    }, [])

    const resize = (e: any) => {
        console.log('>>>>>>>>>>>>>>>>>>>>', e)
        setData({
            w: e.target.outerWidth,
            h: e.target.outerHeight
        })
    }



    return (
        <DivWrapperItemProjectsSC>
            <DivWrapperTextAndImageSC>
                <DivWrapperImageSC
                    $img={Image.src}
                >

                </DivWrapperImageSC>
                <DivWrapperText2SC>
                    <DivItemTextSC>
                        <SpanBolderTextSC
                            $fSize={dataLayout.w >= 767? 36 : 20}
                        >
                            Initiative
                        </SpanBolderTextSC>
                        <SpanDefaultTextSC>
                            Lorem ipsum dolor sit amet consectetur. Cras eget rhoncus.
                        </SpanDefaultTextSC>
                    </DivItemTextSC>
                    <DivItemTextSC>
                        <SpanDefaultTextSC>
                            Invested
                        </SpanDefaultTextSC>
                        <SpanBolderTextSC
                            $fSize={24}
                        >
                            100 tokens
                        </SpanBolderTextSC>
                    </DivItemTextSC>
                </DivWrapperText2SC>
            </DivWrapperTextAndImageSC>

            <DivWrapperTextSC>
                <ButtonWrapper
                    directionRadius="center"
                    // styles={styles}
                    primary={true}
                    height={dataLayout.w <= 479 ? 56 : 74}
                    width={dataLayout.w <= 479 ? 150 : 190}
                    // onClick={() => router.push('/')}
                >
                    <SpanTextButtonSC> Stake now </SpanTextButtonSC>
                </ButtonWrapper>
                <ButtonWrapper
                    directionRadius="center"
                    // styles={styles}
                    primary={true}
                    height={dataLayout.w <= 479 ? 56 : 74}
                    width={dataLayout.w <= 479 ? 150 : 190}
                    // onClick={() => router.push('/')}
                >
                    <SpanTextButtonSC> Unstake </SpanTextButtonSC>
                </ButtonWrapper>
            </DivWrapperTextSC>
        </DivWrapperItemProjectsSC>
    );
};

export default ItemProjects;