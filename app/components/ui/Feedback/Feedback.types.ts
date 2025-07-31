import type { HTMLMotionProps } from "motion/react";

export type TransitionVariant = "scale" | "hover" | "none";

export interface Palette {
  normal: string;
  hover: string;
  tap: string;
  focus: string;
}

export interface FeedbackProps extends HTMLMotionProps<"div"> {
  transitionVariant?: TransitionVariant;
  palette?: Palette;
}
