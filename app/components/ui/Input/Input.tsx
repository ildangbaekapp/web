import React from "react";

import * as S from "./Input.styles";

export type InputVariant = "outline" | "underline";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  variant?: InputVariant;
}

export default function Input({ variant = "outline", ...props }: InputProps) {
  return <S.StyledInput $variant={variant} {...props} />;
}
