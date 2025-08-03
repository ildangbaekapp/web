import { useCallback, useState } from "react";
import { MdArrowBack, MdCheck, MdRefresh } from "react-icons/md";
import { useTheme } from "styled-components";

import Button from "~/components/ui/Button";
import IconButton from "~/components/ui/IconButton";
import usePalette from "~/hooks/usePalette";
import { useSearchStore, initialFilter } from "~/store/searchStore";
import type Filters from "~/types/filter";
import getFilterValueText from "~/utils/getFilterValueText";

import FilterEditView from "./FilterEditView";
import FilterMenuItem from "./FilterMenuItem";
import { filterLabels } from "./FilterModalView.constants";
import * as S from "./FilterModalView.styles";

interface FilterModalViewProps {
  onBack: () => void;
}

export default function FilterModalView({ onBack }: FilterModalViewProps) {
  const theme = useTheme();
  const { filter, setFilter } = useSearchStore();

  const [selectedFilter, setSelectedFilter] = useState<keyof Filters>("type");
  const [tempFilter, setTempFilter] = useState(filter);

  const palette = usePalette("background");

  // 필터 변경 핸들러
  const handleFilterChange = (value: Filters[typeof selectedFilter]) => {
    setTempFilter((prev) => ({ ...prev, [selectedFilter]: value }));
  };

  // 필터 적용 핸들러
  const handleApply = () => {
    setFilter(tempFilter);
    onBack();
  };

  // 전체 임시 필터 초기화 핸들러
  const handleResetAll = () => {
    setTempFilter(initialFilter);
  };

  // 선택된 임시 필터 초기화 핸들러
  const handleResetCurrent = () => {
    setTempFilter((prev) => ({
      ...prev,
      [selectedFilter]: initialFilter[selectedFilter],
    }));
  };

  // 현재 필터와 임시 필터를 비교하여 변경 여부를 확인
  const isModified = useCallback(
    (key: keyof Filters) => {
      return JSON.stringify(tempFilter[key]) !== JSON.stringify(filter[key]);
    },
    [tempFilter, filter]
  );

  return (
    <S.Wrapper>
      <S.Header>
        <IconButton onClick={onBack} palette={palette}>
          <S.IconWrapper>
            <MdArrowBack size={24} />
          </S.IconWrapper>
        </IconButton>
        <S.Title>검색 필터</S.Title>
      </S.Header>

      <S.Body>
        {/* 필터 메뉴 */}
        <S.MenuContainer>
          {Object.keys(filterLabels).map((keyStr) => {
            const key = keyStr as keyof Filters;
            return (
              <FilterMenuItem
                key={key}
                label={filterLabels[key]}
                value={getFilterValueText(key, tempFilter[key])}
                isModified={isModified(key)}
                isSelected={selectedFilter === key}
                onClick={() => setSelectedFilter(key)}
              />
            );
          })}
        </S.MenuContainer>
        
        <S.ContentContainer>
          {/* 필터 수정 뷰 */}
          <FilterEditView
            filterKey={selectedFilter}
            value={tempFilter[selectedFilter]}
            onChange={handleFilterChange}
          />

          {/* 하단 */}
          <S.Footer>
            <Button
              onClick={handleResetAll}
              palette={palette}
              color={theme.colors.secondary.normal}
            >
              전체 초기화
            </Button>
            <Button
              onClick={handleResetCurrent}
              palette={palette}
              color={theme.colors.secondary.normal}
              icon={<MdRefresh size={24} />}
            >
              초기화
            </Button>
            <Button onClick={handleApply} icon={<MdCheck size={24} />}>
              적용
            </Button>
          </S.Footer>
        </S.ContentContainer>
      </S.Body>
    </S.Wrapper>
  );
}
