import { motion } from "motion/react";
import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.normal};
`;

export const Content = styled.main`
  padding-top: 80px;
`;

export const ModalContent = styled(motion.div)`
  width: 100%;
  border-radius: 32px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;
