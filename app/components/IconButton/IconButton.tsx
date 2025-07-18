import { motion } from "motion/react";
import type { ReactNode } from "react";

import * as S from "./IconButton.styles";

interface IconButtonProps extends React.ComponentProps<typeof motion.button> {
  icon: ReactNode;
  size?: number;
  color?: string;
}

export default function IconButton({
  icon,
  size = 32,
  color,
  ...props
}: IconButtonProps) {
  return (
    <S.StyledIconButton
      $size={size}
      $color={color}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {icon}
    </S.StyledIconButton>
  );
}
