import { motion } from "motion/react";
import styled from "styled-components";

import type { Palette } from "./Feedback.types";

export const Wrapper = styled(motion.div)<{
  $palette: Palette;
  $disabled?: boolean;
}>`
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  background-color: ${({ $palette }) => $palette.normal};
  transition: background-color 0.2s;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    background-color: ${({ $palette }) => $palette.focus};
  }

  &:hover {
    background-color: ${({ $palette }) => $palette.hover};
  }

  &:hover:active {
    background-color: ${({ $palette }) => $palette.tap};
  }
`;
