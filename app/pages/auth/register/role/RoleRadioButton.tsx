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
    <S.RoleButtonWrapper $selected={selected} onClick={onClick}>
      <S.IconWrapper $selected={selected}>{icon}</S.IconWrapper>
      <S.Label $selected={selected}>{label}</S.Label>
    </S.RoleButtonWrapper>
  );
}
