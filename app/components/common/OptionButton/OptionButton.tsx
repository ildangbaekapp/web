import usePalette from "~/hooks/usePalette";

import * as S from "./OptionButton.styles";

interface OptionButtonProps {
  isSelected: boolean;
  label: string;
  icon: React.ReactNode;
  size?: number | string;
  fontSize?: number | string;
  onClick: () => void;
}

export default function OptionButton({
  isSelected,
  label,
  icon,
  size = 100,
  fontSize = 16,
  onClick,
}: OptionButtonProps) {
  const [normalPalette, selectedPalette] = usePalette([
    "background",
    "primaryBackground",
  ]);

  return (
    <S.ButtonWrapper
      palette={isSelected ? selectedPalette : normalPalette}
      transitionVariant="hover"
      $isSelected={isSelected}
    >
      <S.Button onClick={onClick}>
        <S.Circle
          $isSelected={isSelected}
          $size={typeof size === "number" ? `${size}px` : size}
        >
          <S.IconWrapper>{icon}</S.IconWrapper>
          <S.Label
            $fontSize={
              typeof fontSize === "number" ? `${fontSize}px` : fontSize
            }
          >
            {label}
          </S.Label>
        </S.Circle>
      </S.Button>
    </S.ButtonWrapper>
  );
}
