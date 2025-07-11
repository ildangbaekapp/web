import * as S from "./RoleRadioButton.styles";

interface RoleRadioButtonProps {
  icon: React.ReactNode;
  label: string;
  selected: boolean;
  onClick: () => void;
}

export default function RoleRadioButton({
  icon,
  label,
  selected,
  onClick,
}: RoleRadioButtonProps) {
  return (
    <S.RoleButtonWrapper selected={selected} onClick={onClick}>
      <S.IconWrapper selected={selected}>
        {icon}
        <S.Label>{label}</S.Label>
      </S.IconWrapper>
    </S.RoleButtonWrapper>
  );
}
