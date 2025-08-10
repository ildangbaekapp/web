import { MdChevronRight } from "react-icons/md";

import usePalette from "~/hooks/usePalette";

import * as S from "./FilterMenuItem.styles";

interface FilterMenuItemProps {
  label: string;
  value: string;
  isDefault: boolean;
  isModified: boolean;
  isSelected: boolean;
  onClick: () => void;
}

export default function FilterMenuItem({
  label,
  value,
  isDefault,
  isModified,
  isSelected,
  onClick,
}: FilterMenuItemProps) {
  const [selectedPalette, normalPalette] = usePalette(["primaryBackground", "background"]);

  return (
    <S.MenuItemWrapper
      palette={isSelected ? selectedPalette : normalPalette}
      $isSelected={isSelected}
    >
      <S.MenuItem onClick={onClick}>
        <S.Label $isSelected={isSelected}>
          {/* 필터 라벨 */}
          {label}

          {/* 수정됐으면 별표 추가 */}
          {isModified && "*"}

          {/* 기본값이 아니면 점 추가 */}
          {!isDefault && <S.Dot />}
        </S.Label>

        {/* 값 */}
        <S.Content>
          <S.Value>{value || "설정 안 함"}</S.Value>
          <S.IconWrapper>
            <MdChevronRight size={18} />
          </S.IconWrapper>
        </S.Content>
      </S.MenuItem>
    </S.MenuItemWrapper>
  );
}
