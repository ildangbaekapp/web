import type { HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

import * as S from "./Button.styles";

export type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
}

export default function Button({
  children,
  variant = "primary",
  icon,
  ...props
}: ButtonProps) {
  return (
    <S.StyledButton
      $variant={variant}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      whileFocus={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {icon}
      {children}
    </S.StyledButton>
  );
}
