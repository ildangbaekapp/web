import React from "react";
import * as S from "./Input.styles";

type InputProps = React.ComponentPropsWithoutRef<"input">;

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <S.StyledInput ref={ref} {...props} />;
});

Input.displayName = "Input";

export default Input;
