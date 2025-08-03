import { motion } from "motion/react";
import styled from "styled-components";

export const Wrapper = styled(motion.label)<{
  $size: "small" | "large";
}>`
  display: inline-flex;
  align-items: center;
  padding: ${({ $size }) => ($size === "large" ? "8px" : "6px")};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fontFamily};
  border-radius: ${({ $size }) => ($size === "large" ? "12px" : "8px")};
  -webkit-tap-highlight-color: transparent;
`;

export const Input = styled.input.attrs({
  type: "checkbox",
})`
  appearance: none;
  margin: 0;
`;

export const IconWrapper = styled.span<{
  $size: "small" | "large";
  $checked: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size: size }) => (size === "large" ? "28px" : "20px")};
  height: ${({ $size: size }) => (size === "large" ? "28px" : "20px")};
  border-radius: 50%;
  background-color: ${({ theme, $checked }) =>
    $checked ? theme.colors.primary.normal : theme.colors.background.dark};
  color: ${({ theme }) => theme.colors.background.light};
  margin-right: 15px;
  transition: background-color 0.2s;
`;

export const Label = styled.span<{
  $size: "small" | "large";
}>`
  font-size: ${({ $size }) => ($size === "large" ? "20px" : "16px")};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary.normal};
`;

export const Circle = styled.div<{ $size: "small" | "large" }>`
  width: ${({ $size }) => ($size === "large" ? "14px" : "10px")};
  height: ${({ $size }) => ($size === "large" ? "14px" : "10px")};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.background.light};
`;
