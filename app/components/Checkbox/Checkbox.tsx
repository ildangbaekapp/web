import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useTheme } from "styled-components";

import * as S from "./Checkbox.styles";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  size?: "small" | "large";
}

export default function Checkbox({
  checked,
  onChange,
  label,
  size = "small",
}: CheckboxProps) {
  const theme = useTheme();
  const [id] = useState(`checkbox-${Math.random().toString(36)}`);

  const handleChange = () => {
    onChange(!checked);
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
      transition={{scale: { type: "spring", stiffness: 400, damping: 17 }}}
      $size={size}
    >
      <S.Input id={id} checked={checked} onChange={handleChange} />
      <S.IconWrapper $size={size} $checked={checked}>
        {checked && <FaCheck size={size === "large" ? 16 : 12} />}
      </S.IconWrapper>
      <S.Label $size={size}>{label}</S.Label>
    </S.Wrapper>
  );
}
