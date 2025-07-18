import { motion } from "motion/react";
import styled from "styled-components";

interface StyledIconButtonProps {
  $size: number;
}

export const StyledIconButton = styled(motion.button)<StyledIconButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  border-radius: 50%;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  color: ${({ theme }) => theme.colors.darkGrey};
  transition: background-color 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.08);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.12);
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.grey};
    cursor: not-allowed;
    background-color: transparent;
  }
`;
