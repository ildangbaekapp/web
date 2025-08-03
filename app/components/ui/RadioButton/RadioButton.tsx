import { useState } from "react";
import { useTheme } from "styled-components";

import * as S from "./RadioButton.styles";

interface RadioButtonProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  size?: "small" | "large";
}

export default function RadioButton({
  checked,
  onChange,
  label,
  size = "small",
}: RadioButtonProps) {
  const theme = useTheme();
  const [id] = useState(`radio-${Math.random().toString(36)}`);

  const handleChange = () => {
    onChange?.(!checked);
  };

  return (
    <S.Wrapper
      htmlFor={id}
      whileHover={{
        backgroundColor: `${theme.colors.background.dark}4d`,
      }}
      whileTap={{
        scale: 0.95,
        backgroundColor: `${theme.colors.background.dark}80`,
      }}
      whileFocus={{
        backgroundColor: `${theme.colors.background.dark}4d`,
      }}
      transition={{ scale: { type: "spring", stiffness: 400, damping: 17 } }}
      $size={size}
    >
      <S.Input id={id} checked={checked} onChange={handleChange} />
      <S.IconWrapper $size={size} $checked={checked}>
        {checked && <S.Circle $size={size} />}
      </S.IconWrapper>
      {label && <S.Label $size={size}>{label}</S.Label>}
    </S.Wrapper>
  );
}
