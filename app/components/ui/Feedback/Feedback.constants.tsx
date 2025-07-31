import type { MotionNodeOptions } from "motion/react";

import type { TransitionVariant } from "./Feedback.types";

export const transitions: Record<TransitionVariant, MotionNodeOptions> = {
  scale: {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    whileFocus: { scale: 1.03 },
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
  hover: {
    whileHover: {
      y: -5,
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)",
    },
    whileTap: {
      scale: 0.97,
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)",
    },
    whileFocus: {
      y: -5,
      scale: 0.97,
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)",
    },
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
  none: {},
};
