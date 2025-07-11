import type { ReactNode } from "react";
import * as S from "./Button.styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
    <S.StyledButton $variant={variant} {...props}>
      {icon}
      {children}
    </S.StyledButton>
  );
}
