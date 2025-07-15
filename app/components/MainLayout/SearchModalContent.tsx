import { useState } from "react";
import { MdChevronRight, MdHistory, MdSearch, MdTune } from "react-icons/md";

import { useSearchStore } from "~/store/searchStore";

import * as S from "./SearchModalContent.styles";

const recentSearches = ["상하차", "배달", "단기 알바", "사무 보조"];

export default function SearchModalContent() {
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
      <S.SearchBox>
        <S.SearchInput
          placeholder="검색어를 입력하세요."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <S.SearchIcon onClick={handleSearch}>
          <MdSearch size={24} />
        </S.SearchIcon>
      </S.SearchBox>
      <S.Body>
        <S.Filter>
          <S.FilterLeft>
            <S.FilterTitle>
              <S.FilterIcon>
                <MdTune size={20} />
              </S.FilterIcon>
              <S.FilterText>적용된 검색 필터</S.FilterText>
            </S.FilterTitle>
            <S.FilterCount>{appliedFilterCount}건</S.FilterCount>
          </S.FilterLeft>
          <MdChevronRight size={24} />
        </S.Filter>
        <S.HistoryContainer>
          {recentSearches.map((term) => (
            <S.HistoryItem
              key={term}
              onClick={() => handleRecentSearchClick(term)}
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
