import type { HTMLMotionProps, MotionNodeOptions } from "motion/react";
import type { ReactNode } from "react";

import * as S from "./Button.styles";

export type ButtonVariant = "primary" | "secondary";

export type ButtonTransitionVariant = "scale" | "hover";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: ButtonVariant;
  transitionVariant?: ButtonTransitionVariant;
  icon?: ReactNode;
}

export default function Button({
  children,
  variant = "primary",
  transitionVariant = "scale",
  icon,
  ...props
}: ButtonProps) {
  const transitions: MotionNodeOptions = {
    whileHover: {},
    whileTap: {},
    whileFocus: {},
    transition: {},
  };

  // transitionVariant scale
  if (transitionVariant === "scale") {
    transitions.whileHover = { scale: 1.03 };
    transitions.whileTap = { scale: 0.97 };
    transitions.whileFocus = { scale: 0.97 };
    transitions.transition = { type: "spring", stiffness: 400, damping: 17 };
  }

  // transitionVariant hover
  else {
    transitions.whileHover = {
      y: -5,
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)",
    };
    transitions.whileTap = {
      scale: 0.97,
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)",
    };
    transitions.whileFocus = {
      y: -5,
      scale: 0.97,
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)",
    };
  }

  return (
    <S.StyledButton $variant={variant} {...transitions} {...props}>
      {icon}
      {children}
    </S.StyledButton>
  );
}
