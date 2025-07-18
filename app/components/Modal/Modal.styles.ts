import { motion } from "framer-motion";
import styled from "styled-components";

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled(motion.div)`
  width: 100%;
  max-width: 600px; /* Adjust as needed */
  padding: 20px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  border-radius: 30px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  display: inline-flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 20px;
  }
`;
