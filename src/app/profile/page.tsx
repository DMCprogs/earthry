'use client'
import React from 'react';
import {
    DivBoxAvatarAndInputSC,
    DivSection1SC, DivWrapperInputsSC,
    DivWrapperPageProfileSC,
    DivWrapperProfileAvatarSC, DivWrapperTwoSectionsSC,
    H4SC, H5SC, InputSC, SpanSC
} from "@/app/profile/styles.profile";
import { DivDefaultContainerSC } from "../styles.page";
import Image from '../images/vedmak.webp'
import ButtonWrapper from "@/app/components/custom_button";
import Section1 from "@/app/profile/companents/section1";
import Section2 from "@/app/profile/companents/section2";
import ProjectsList from "@/app/components/projects_list";

const Profile = () => {
    return (
        <DivDefaultContainerSC style={{ marginTop: "140px" }}>
            <DivWrapperPageProfileSC>
                <DivSection1SC>
                    <H4SC>Your profile</H4SC>
                    <Section1/>

                </DivSection1SC>
                <Section2/>

                <DivSection1SC>
                    <ProjectsList/>

                </DivSection1SC>
                <DivSection1SC>
                    <H5SC>Harvest</H5SC>

                </DivSection1SC>
            </DivWrapperPageProfileSC>
        </DivDefaultContainerSC>

    );
};

export default Profile;