"use client";
import React, { useEffect, useState } from "react";
import {
  DivBranchBoxSC,
  DivContainerSec4SC,
  DivRoadMapElSC,
  DivBoxTitleSC,
  DivBoxRoadMapElSC,
  ImageRoadmapSC,
  TitleRoadmapSC,
} from "./styles.roadmap";
import { TypeRoadMapItem, roadMapData } from "./data";
import { motion } from "framer-motion";
const Roadmap = () => {
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    window.onload = handleResize;
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  return (
    <div>
      <DivContainerSec4SC>
        <DivBoxTitleSC>
          <TitleRoadmapSC>Platform creation roadmap</TitleRoadmapSC>
        </DivBoxTitleSC>
        {width >= 1000 ? (
          <DivBranchBoxSC>
            {roadMapData.map((item: TypeRoadMapItem, index: number) => {
              if (index % 2 === 1) {
                return (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                      hidden: {
                        scale: 1,
                        x: 1000,
                        opacity: 0,
                      },
                      visible: {
                        scale: 1,
                        x: 260,
                        opacity: 1,
                        transition: { duration: 0.5, delay: index * 0.3 },
                      },
                    }}
                  >
                    <DivRoadMapElSC
                      right={true}
                      back={item.back}
                      font={item.font}
                      key={index}
                    >
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                    </DivRoadMapElSC>
                  </motion.div>
                );
              } else {
                return (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                      hidden: {
                        scale: 1,
                        x: -1000,
                        opacity: 0,
                      },
                      visible: {
                        scale: 1,
                        x: -260,
                        opacity: 1,
                        transition: { duration: 0.5, delay: index * 0.3 },
                      },
                    }}
                  >
                    <DivRoadMapElSC
                      left={true}
                      back={item.back}
                      font={item.font}
                    >
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                    </DivRoadMapElSC>
                  </motion.div>
                );
              }
            })}
          </DivBranchBoxSC>
        ) : (
          <DivBranchBoxSC>
            {roadMapData.map((item: TypeRoadMapItem, index: number) => {
              if (index % 2 === 1) {
                return (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                      hidden: {
                        scale: 1,
                        x: 500,
                        opacity: 0,
                      },
                      visible: {
                        scale: 1,
                        x: 0,
                        opacity: 1,
                        transition: { duration: 0.5, delay: index * 0.3 },
                      },
                    }}
                  >
                    <DivBoxRoadMapElSC key={index}>
                      <DivRoadMapElSC
                        right={true}
                        back={item.back}
                        font={item.font}
                      >
                        <div>
                          <h3>{item.title}</h3>
                          <p>{item.desc}</p>
                        </div>
                      </DivRoadMapElSC>
                      <ImageRoadmapSC
                        isChangeHeight={item.isChangeHeight}
                        img={item.img}
                      ></ImageRoadmapSC>
                    </DivBoxRoadMapElSC>
                  </motion.div>
                );
              } else {
                return (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                      hidden: {
                        scale: 1,
                        x: -500,
                        opacity: 0,
                      },
                      visible: {
                        scale: 1,
                        x: 0,
                        opacity: 1,
                        transition: { duration: 0.5, delay: index * 0.3 },
                      },
                    }}
                  >
                    <DivBoxRoadMapElSC key={index}>
                      <DivRoadMapElSC
                        right={true}
                        back={item.back}
                        font={item.font}
                      >
                        <div>
                          <h3>{item.title}</h3>
                          <p>{item.desc}</p>
                        </div>
                      </DivRoadMapElSC>
                      <ImageRoadmapSC
                        isChangeHeight={item.isChangeHeight}
                        img={item.img}
                      ></ImageRoadmapSC>
                    </DivBoxRoadMapElSC>
                  </motion.div>
                );
              }
            })}
          </DivBranchBoxSC>
        )}
      </DivContainerSec4SC>
    </div>
  );
};

export default Roadmap;
