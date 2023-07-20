import React from 'react';
import {
    DivBoxAvatarAndInputSC,
    DivWrapperInputsSC,
    DivWrapperProfileAvatarSC,
    InputSC,
    SpanSC
} from "@/app/profile/styles.profile";
import Image from "@/app/images/vedmak.webp";
import ButtonWrapper from "@/app/components/custom_button";

const Section1 = () => {
    return (
        <DivBoxAvatarAndInputSC>
            <DivWrapperProfileAvatarSC
                $img={Image.src}
            >


            </DivWrapperProfileAvatarSC>
            <DivWrapperInputsSC>
                <SpanSC>Nickname</SpanSC>
                <InputSC
                    type={'text'}
                    placeholder={'Nickname'}
                />
            </DivWrapperInputsSC>
            <ButtonWrapper
                directionRadius="center"
                // styles={styles}
                primary={true}
                height={64}
                width={250}
                // onClick={() => router.push('/')}
            >
                <span> Subscribe </span>
            </ButtonWrapper>
        </DivBoxAvatarAndInputSC>
    );
};

export default Section1;