import { MdChevronRight } from "react-icons/md";

import * as S from "./FilterMenuItem.styles";

interface FilterMenuItemProps {
  label: string;
  value: string;
  isModified: boolean;
  isSelected: boolean;
  onClick: () => void;
}

export default function FilterMenuItem({
  label,
  value,
  isModified,
  isSelected,
  onClick,
}: FilterMenuItemProps) {
  const isDefault = value === "설정 안 함";

  return (
    <S.MenuItem
      colorScheme={isSelected ? "primaryBackground" : "background"}
      onClick={onClick}
      $isSelected={isSelected}
    >
      <S.Label $isSelected={isSelected}>
        {label}
        {isModified && "*"}
        {!isDefault && <S.Dot />}
      </S.Label>
      <S.Content>
        <S.Value>{value || "설정 안 함"}</S.Value>
        <S.IconWrapper>
          <MdChevronRight size={18} />
        </S.IconWrapper>
      </S.Content>
    </S.MenuItem>
  );
}
