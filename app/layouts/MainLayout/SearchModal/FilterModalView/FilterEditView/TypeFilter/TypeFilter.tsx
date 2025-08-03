import { useCallback, useMemo } from "react";
import { FaDolly, FaIndustry } from "react-icons/fa";
import { MdGridView, MdTwoWheeler } from "react-icons/md";

import usePalette from "~/hooks/usePalette";
import { Type } from "~/types/filter";

import * as S from "./TypeFilter.styles";

interface TypeFilterProps {
  value: Type[] | null;
  onChange: (value: Type[] | null) => void;
}

const typeOptions: { name: Type; icon: React.ReactNode; label: string }[] = [
  { name: Type.INDUSTRY, icon: <FaIndustry size={24} />, label: "공장" },
  { name: Type.DELIVERY, icon: <MdTwoWheeler size={24} />, label: "배달" },
  { name: Type.FLEX, icon: <MdGridView size={24} />, label: "통합" },
  { name: Type.CARGO, icon: <FaDolly size={24} />, label: "상하차" },
];

export default function TypeFilter({ value, onChange }: TypeFilterProps) {
  const [selectedPalette, normalPalette] = usePalette([
    "primaryBackground",
    "background",
  ]);

  const selectedTypes = useMemo(() => value || [], [value]);
  const isSelected = useCallback(
    (type: Type) => selectedTypes.includes(type),
    [selectedTypes]
  );

  const handleTypeClick = (type: Type) => {
    const newSelection = isSelected(type)
      ? selectedTypes.filter((t) => t !== type)
      : [...selectedTypes, type];
    onChange(newSelection.length > 0 ? newSelection : null);
  };

  return (
    <S.Wrapper>
      {typeOptions.map((option) => (
        <S.TypeButtonWrapper
          key={option.name}
          palette={isSelected(option.name) ? selectedPalette : normalPalette}
          transitionVariant={"hover"}
          $isSelected={isSelected(option.name)}
        >
          <S.TypeButton onClick={() => handleTypeClick(option.name)}>
            <S.Circle $isSelected={isSelected(option.name)}>
              <S.IconWrapper>{option.icon}</S.IconWrapper>
              <S.Label>{option.label}</S.Label>
            </S.Circle>
          </S.TypeButton>
        </S.TypeButtonWrapper>
      ))}
    </S.Wrapper>
  );
}
