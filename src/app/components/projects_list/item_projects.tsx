import React from 'react';
import {
    DivItemTextSC,
    DivWrapperImageSC,
    DivWrapperItemProjectsSC,
    DivWrapperTextSC, SpanBolderTextSC, SpanDefaultTextSC, SpanTextButtonSC
} from "@/app/components/projects_list/styles.projects_list";
import Image from '../../images/BlogDetail.jpg'
import ButtonWrapper from "@/app/components/custom_button";
const ItemProjects = () => {
    return (
        <DivWrapperItemProjectsSC>
            <DivWrapperImageSC
                $img={Image.src}
            >

            </DivWrapperImageSC>
            <DivWrapperTextSC>
                <DivItemTextSC>
                    <SpanBolderTextSC
                        $fSize={20}
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
            </DivWrapperTextSC>
            <DivWrapperTextSC>
                <ButtonWrapper
                    directionRadius="center"
                    // styles={styles}
                    primary={true}
                    height={56}
                    width={150}
                    // onClick={() => router.push('/')}
                >
                    <SpanTextButtonSC> Stake now </SpanTextButtonSC>
                </ButtonWrapper>
                <ButtonWrapper
                    directionRadius="center"
                    // styles={styles}
                    primary={true}
                    height={56}
                    width={150}
                    // onClick={() => router.push('/')}
                >
                    <SpanTextButtonSC> Unstake </SpanTextButtonSC>
                </ButtonWrapper>
            </DivWrapperTextSC>
        </DivWrapperItemProjectsSC>
    );
};

export default ItemProjects;