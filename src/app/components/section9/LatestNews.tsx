"use client";
import React, {FC, MutableRefObject, useState} from "react";
import BlogCard from "../blog/BlogCard";
import {
    DivContainerBlogSC,
    DivContainerSectionSC,
    DivGridSC,
    DivTexLatestSC,
    ButtonReadMoreSC,
} from "./styles.LatestNews";
import image from "../../images/ItemBlogExample.png";
import Link from "next/link";
import ButtonWrapper from "../custom_button";
import {motion} from "framer-motion";

const LatestNews: FC<{
    forRefW: MutableRefObject<undefined | any>;
}> = (props) => {
    const {forRefW} = props;
    return (
        <DivContainerSectionSC ref={forRefW}>
            <DivContainerBlogSC>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: {
                            y: -100,
                            opacity: 0,
                        },
                        visible: {
                            y: 0,
                            opacity: 1,
                            transition: {duration: 0.5, delay: 0.3},
                        },
                    }}
                >
                    <DivTexLatestSC>Latest Posts and News</DivTexLatestSC>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: {
                            opacity: 0,
                        },
                        visible: {
                            opacity: 1,
                            transition: {duration: 1.8, delay: 0.3},
                        },
                    }}
                >
                    <DivGridSC>
                        <BlogCard
                            img={image}
                            title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
                            description={
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
                            }
                        />
                        <BlogCard
                            img={image}
                            title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
                            description={
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
                            }
                        />
                        <BlogCard
                            img={image}
                            title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
                            description={
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
                            }
                        />
                    </DivGridSC>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: {
                            y: 100,
                            opacity: 0,
                        },
                        visible: {
                            y: 0,
                            opacity: 1,
                            transition: {duration: 0.5, delay: 0.3},
                        },
                    }}
                >
                    <Link href={"/blog"}>
                        <ButtonWrapper
                            primary={true}
                            width={187}
                            height={74}
                            directionRadius={"center"}
                        >
                            <span>Read more</span>
                        </ButtonWrapper>
                    </Link>
                </motion.div>
            </DivContainerBlogSC>
        </DivContainerSectionSC>
    );
};

export default LatestNews;
