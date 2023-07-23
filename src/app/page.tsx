"use client";

import React, {MutableRefObject, useEffect, useRef} from "react";
import { DivContentSC, DivSectionsContainerSC } from "@/app/styles.page";
import Section1 from "./components/section1/Earthy"
import Section2 from "./components/section2/Informations";
import Section3 from "./components/section3/";
import Section4 from "./components/section4/WaysToAchieve"
import Section5 from "./components/section5/Tokenomic";
import Section6 from "./components/section6/Airdrop";
import Section7 from "./components/section7/Roadmap";
import Section8 from "./components/section8/JoinUs"
import Section9 from "./components/section9/LatestNews";
import Section10 from "./components/section10/Form";
import Section11 from "./components/section11/Contacts";
import Header from "@/app/components/header";
import {IRefObj} from "@/app/interfaces/interfaces";

const Landing = () => {
    let bottomRefHome = useRef<any>();
    let bottomRefTokenomics = useRef<any>();
    let bottomRefBlog = useRef<any>()
    let bottomRefProject = useRef<any>()

    function getRef(refs: IRefObj) {
        // console.log(`Hello from  the child`, refs);
        bottomRefHome = refs.bottomRefHome;
        bottomRefTokenomics = refs.bottomRefTokenomics;
        bottomRefBlog = refs.bottomRefBlog;
        bottomRefProject = refs.bottomRefProject;
    }

    useEffect(() => {
        window.onscroll = onScroll;
    }, []);

    const onScroll = () => {
        var winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        var height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        if (document.getElementById("myBar")) {
            document.getElementById("myBar")!.style.width = scrolled + "%";
        }
    };
    const onClickScrollHome = () => {
        console.log("><>>>>>>>");
        bottomRefHome?.current?.scrollIntoView({ behavior: "smooth" });
    };
    const onClickScrollTokenomics = () => {
        console.log("><>>>>>>>");
        bottomRefTokenomics?.current?.scrollIntoView({ behavior: "smooth" });
    };
    const onClickScrollBlog = () => {
        console.log("><>>>>>>>");
        bottomRefBlog?.current?.scrollIntoView({ behavior: "smooth" });
    };
    const onClickScrollProject = () => {
        console.log("><>>>>>>>");
        bottomRefProject?.current?.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(
        () =>
            getRef({
                bottomRefHome,
                bottomRefTokenomics,
                bottomRefBlog,
                bottomRefProject
            }),

        [bottomRefHome, bottomRefTokenomics, bottomRefBlog, bottomRefProject]
    );

    return (
        <>
            <Header
                onClickScrollHome={onClickScrollHome}
                onClickScrollTokenomics={onClickScrollTokenomics}
                onClickScrollBlog={onClickScrollBlog}
                onClickScrollProject={onClickScrollProject}
            />
            <Section1 forRefW={bottomRefHome}/>
            <DivContentSC>
            <DivSectionsContainerSC>
                <Section2/>
                <Section3 forRefW={bottomRefProject}/>
                <Section4/>
                <Section5 forRefW={bottomRefTokenomics}/>
                <Section6/>
                <Section7/>
                <Section8/>
                <Section9 forRefW={bottomRefBlog}/>
                <Section10/>
                <Section11/>
            </DivSectionsContainerSC>
            </DivContentSC>
        </>
    );
};
export default Landing;
