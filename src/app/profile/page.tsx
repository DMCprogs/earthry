'use client'
import React from 'react';
import {
    DivBoxAvatarAndInputSC,
    DivSection1SC, DivWrapperInputsSC,
    DivWrapperPageProfileSC,
    DivWrapperProfileAvatarSC,
    H4SC, H5SC, InputSC, SpanSC
} from "@/app/profile/styles.profile";
import { DivDefaultContainerSC } from "../styles.page";
import Image from '../images/vedmak.webp'
import ButtonWrapper from "@/app/components/custom_button";

const Profile = () => {
    return (
        <DivDefaultContainerSC style={{ marginTop: "140px" }}>
            <DivWrapperPageProfileSC>
                <DivSection1SC>
                    <H4SC>Your profile</H4SC>
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

                </DivSection1SC>
                <DivSection1SC>
                    <H5SC>Balance</H5SC>

                </DivSection1SC>
                <DivSection1SC>
                    <H5SC>Harvest</H5SC>

                </DivSection1SC>
                <DivSection1SC>
                    <H5SC>Harvest</H5SC>

                </DivSection1SC>
                <DivSection1SC>
                    <H5SC>Harvest</H5SC>

                </DivSection1SC>
            </DivWrapperPageProfileSC>
        </DivDefaultContainerSC>

    );
};

export default Profile;