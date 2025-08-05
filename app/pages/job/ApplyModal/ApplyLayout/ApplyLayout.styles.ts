import { motion } from "motion/react";
import styled from "styled-components";

import OptionButton from "~/components/common/OptionButton";

export const Wrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.background.normal};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(800px, 90vw);
`;

export const TypeButtonContainer = styled(motion.div).attrs({ layout: true })`
  display: flex;
  width: 100%;
  max-width: 600px;
  padding: 20px 20px 0 20px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const TypeButton = styled(OptionButton).attrs({
  size: "min(20vw, 100px)",
  fontSize: "min(max(12px, 2.5vw), 16px)",
})`
  flex: unset;
`;

export const Content = styled(motion.div)`
  align-self: stretch;
`;
