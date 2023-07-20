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
  DivBigBoxRoadMapElSC,
  ImgBigElSC,
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
         <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                      hidden: {
                        scale: 1,
                        y: -100,
                        opacity: 0,
                      },
                      visible: {
                        scale: 1,
                        y: 0,
                        opacity: 1,
                        transition: { duration: 0.5, delay: 0.3 },
                      },
                    }}
                  >
        <DivBoxTitleSC>
          <TitleRoadmapSC>Platform creation roadmap</TitleRoadmapSC>
        </DivBoxTitleSC></motion.div>
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
                        x: 700,
                        opacity: 0,
                      },
                      visible: {
                        scale: 1,
                        x:300,
                        opacity: 1,
                        transition: { duration: 0.5, delay: index * 0.3 },
                      },
                    }}
                  >
                    <DivBigBoxRoadMapElSC key={index} $right={true}>
                      <ImgBigElSC
                        $imgBig={item.imgBig}
                        $isChangePosition={item.isChangePosition}
                      />
                      <DivRoadMapElSC
                        $back={item.back}
                        $right={true}
                        $font={item.font}
                      >
                        <div>
                          <h3>{item.title}</h3>
                          <p>{item.desc}</p>
                        </div>
                      </DivRoadMapElSC>
                    </DivBigBoxRoadMapElSC>
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
                        x: -400,
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
                    <DivBigBoxRoadMapElSC key={index} $left={true}>
                      <DivRoadMapElSC
                        $left={true}
                        $back={item.back}
                        $font={item.font}
                      >
                        <div>
                          <h3>{item.title}</h3>
                          <p>{item.desc}</p>
                        </div>
                      </DivRoadMapElSC>
                      <ImgBigElSC
                        $imgBig={item.imgBig}
                        $isChangePosition={item.isChangePosition}
                      />
                    </DivBigBoxRoadMapElSC>
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
                        x: 200,
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
                        $right={true}
                        $back={item.back}
                        $font={item.font}
                      >
                        <div>
                          <h3>{item.title}</h3>
                          <p>{item.desc}</p>
                        </div>
                      </DivRoadMapElSC>
                      <ImageRoadmapSC
                        $isChangeHeight={item.isChangeHeight}
                        $img={item.$img}
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
                        x: -200,
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
                        $right={true}
                        $back={item.back}
                        $font={item.font}
                      >
                        <div>
                          <h3>{item.title}</h3>
                          <p>{item.desc}</p>
                        </div>
                      </DivRoadMapElSC>
                      <ImageRoadmapSC
                        $isChangeHeight={item.isChangeHeight}
                        $img={item.$img}
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
