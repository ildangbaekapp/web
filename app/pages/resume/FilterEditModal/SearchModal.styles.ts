import { motion } from "motion/react";
import styled from "styled-components";

export const ModalContent = styled(motion.div)`
  width: 100%;
  border-radius: 32px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background.normal};
`;
