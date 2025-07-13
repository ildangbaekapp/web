import React from "react";

import * as S from "./Input.styles";

type InputProps = React.ComponentPropsWithoutRef<"input"> & {
  variant?: "login";
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant, ...props }, ref) => {
    return <S.StyledInput ref={ref} variant={variant} {...props} />;
  }
);

Input.displayName = "Input";

export default Input;
