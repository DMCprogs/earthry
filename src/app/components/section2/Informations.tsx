"use client";
import React, { useState } from "react";
import {
    DivContainerSectionSC, 
    DivContainerVideoSC, 
    DivTextSC,
    DivTitleSC,
    ContainerSC,
} from "./style.information";
import YouTube, { YouTubeProps } from "react-youtube";
const options = {
    height: "100%",
    width: "100%",
    playerVars: {
      showinfo: 0,
      // controls: 0,
      rel: 0,
    },
  };

const Informations = () => {

   
    return (
       <DivContainerSectionSC>
         <DivTitleSC>Welcome to the Earthy platform: Co-creation of the Future</DivTitleSC>
          <DivContainerVideoSC>
            <YouTube
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
              }}
              videoId="tGyPa_Okk_8" // defaults -> ''
              id="tGyPa_Okk_8" // defaults -> ''
              onPlay={() => {
                console.log("test");
                // setMute(0);
              }}
              opts={options}

            /> </DivContainerVideoSC>
<ContainerSC>
          <DivTextSC>Our platform is created for a global community of people. 
            Through a social network, she will unite them in communication to implement her ethical social projects in the real world for the prosperity of the Earth. 
            Cooperation and contributing to each other's growth and success through participation in charitable projects of interest, 
            their financing and investment with the help of our token, is organized by the community.Our Earthy platform, the most significant in the field of WEB3 and cryptocurrencies, 
             is aimed at creating a comprehensive ecosystem that unites people from all over the world, allowing them to communicate with like-minded people,
             access services, trade goods and support significant projects using a unique cryptocurrency token called the Earthy Chain Token.</DivTextSC>
             </ContainerSC>
       </DivContainerSectionSC>
    );
};

export default Informations;
