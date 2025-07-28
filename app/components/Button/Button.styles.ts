import { motion } from "motion/react";
import styled from "styled-components";
import type { ColorScheme } from "theme";

interface StyledButtonProps {
  $colorScheme: ColorScheme;
}

export const StyledButton = styled(motion.button)<StyledButtonProps>`
  height: 48px;
  padding: 15px 20px;
  border-radius: 16px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fontFamily};
  border: none;
  cursor: pointer;
  white-space: nowrap;
  background-color: ${({ $colorScheme }) => $colorScheme.normal};
  -webkit-tap-highlight-color: transparent;
  transition: background-color 0.2s;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover,
  &:focus {
    background-color: ${({ $colorScheme }) => $colorScheme.light};
  }

  &:active {
    background-color: ${({ $colorScheme }) => $colorScheme.dark};
  }
`;
