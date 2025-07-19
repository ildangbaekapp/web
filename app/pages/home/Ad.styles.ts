import { motion } from "motion/react";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 16px;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

export const AdContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const AdSlide = styled.div<{ $imageUrl: string }>`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  background-image: url(${({ $imageUrl }) => $imageUrl});
  background-size: cover;
  background-position: center;
`;

export const Count = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 12px;
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const CountText = styled.span``;
