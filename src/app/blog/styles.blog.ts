"use client";
import { styled } from "styled-components";

export const DivBlogContainerSC = styled.div`
  display: grid;
  justify-content: center;
  justify-self:center;
`;

export const DivContentSC = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-column-gap: 24px;
`;