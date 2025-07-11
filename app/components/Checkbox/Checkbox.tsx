import { FaCheck } from "react-icons/fa";
import * as S from "./Checkbox.styles";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  size?: "small" | "large";
  isAllAgree?: boolean;
}

export default function Checkbox({
  checked,
  onChange,
  label,
  size = "small",
  isAllAgree = false,
}: CheckboxProps) {
  const handleChange = () => {
    onChange(!checked);
  };

  return (
    <S.CheckboxContainer onClick={handleChange}>
      <S.IconWrapper checked={checked} size={size}>
        {checked && <FaCheck />}
      </S.IconWrapper>
      <S.Label $isAllAgree={isAllAgree}>{label}</S.Label>
    </S.CheckboxContainer>
  );
}
