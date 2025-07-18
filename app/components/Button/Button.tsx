import { motion } from "framer-motion";
import type { ReactNode } from "react";

import * as S from "./Button.styles";

interface ButtonProps extends React.ComponentProps<typeof motion.button> {
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
      whileHover={{ scale: 1.03, filter: "brightness(1.1)" }}
      whileTap={{ scale: 0.98, filter: "brightness(0.9)" }}
      whileFocus={{ filter: "brightness(1.1)" }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {icon}
      {children}
    </S.StyledButton>
  );
}
