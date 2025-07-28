import { useState } from "react";
import { MdHistory, MdSearch, MdTune } from "react-icons/md";
import { useTheme } from "styled-components";

import { useSearchStore } from "~/store/searchStore";

import * as S from "./SearchView.styles";

const recentSearches = ["상하차", "배달", "단기 알바", "사무 보조"];

interface SearchViewProps {
  onFilterClick?: () => void;
}

export default function SearchView({ onFilterClick }: SearchViewProps) {
  const theme = useTheme();

  const { query, setQuery, filter } = useSearchStore();
  const [inputValue, setInputValue] = useState(query);

  const handleSearch = () => {
    setQuery(inputValue);
  };

  const handleRecentSearchClick = (searchTerm: string) => {
    setQuery(searchTerm);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const appliedFilterCount = Object.values(filter).filter(
    (value) => value !== null && (!Array.isArray(value) || value.length > 0)
  ).length;

  return (
    <S.Wrapper>
      <S.Header>
        <S.SearchBox>
          <S.Left>
            <S.SearchIcon onClick={handleSearch}>
              <MdSearch size={28} />
            </S.SearchIcon>
            <S.SearchInput
              autoFocus
              placeholder="검색어를 입력하세요."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </S.Left>
          <S.Filter onClick={onFilterClick}>
            <S.FilterIcon>
              <MdTune size={20} />
            </S.FilterIcon>
            <S.FilterText>필터</S.FilterText>
            {appliedFilterCount > 0 && (
              <S.FilterCount>{appliedFilterCount}</S.FilterCount>
            )}
          </S.Filter>
        </S.SearchBox>
      </S.Header>
      <S.Body>
        <S.HistoryContainer>
          {recentSearches.map((term) => (
            <S.HistoryItem
              key={term}
              onClick={() => handleRecentSearchClick(term)}
              colorScheme={{
                normal: `${theme.colors.background.light}00`,
                dark: `${theme.colors.background.light}`,
                light: `${theme.colors.background.light}80`,
              }}
            >
              <S.HistoryIcon>
                <MdHistory size={24} />
              </S.HistoryIcon>
              <S.HistoryText>{term}</S.HistoryText>
            </S.HistoryItem>
          ))}
        </S.HistoryContainer>
      </S.Body>
    </S.Wrapper>
  );
}
