import usePalette from "~/hooks/usePalette";

import * as S from "./RoleButton.styles";

interface RoleButtonProps {
  icon: React.ReactNode;
  label: string;
  selected: boolean;
  onClick: () => void;
}

export default function RoleButton({
  icon,
  label,
  selected,
  onClick,
}: RoleButtonProps) {
  const [selectedPalette, normalPalette] = usePalette([
    "primaryBackground", 
    "background",
  ]);

  return (
    <S.Wrapper
      $selected={selected}
      onClick={onClick}
      palette={selected ? selectedPalette : normalPalette}
    >
      <S.Content>
        <S.IconWrapper $selected={selected}>{icon}</S.IconWrapper>
        <S.Label $selected={selected}>{label}</S.Label>
      </S.Content>
    </S.Wrapper>
  );
}
