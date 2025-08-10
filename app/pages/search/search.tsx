import type { Filters } from "@types";
import { AnimatePresence } from "motion/react";
import { useMemo } from "react";
import { MdChevronRight, MdSearch } from "react-icons/md";
import { useNavigate } from "react-router";

import DetailJobCard from "~/components/common/DetailJobCard";
import usePalette from "~/hooks/usePalette";
import { useModalStore } from "~/store/modalStore";
import { initialFilter, useSearchStore } from "~/store/searchStore";
import getFilterValueText from "~/utils/getFilterValueText";

import { jobs } from "./search.constants";
import * as S from "./search.styles";

const filterKeys = Object.keys(initialFilter) as (keyof Filters)[];

export default function SearchResult() {
  const navigate = useNavigate();
  const { setModalState } = useModalStore();
  const { filter, query } = useSearchStore();
  const palette = usePalette("background");

  const handleFilterSummaryClick = () => {
    setModalState("filter");
  };

  const appliedFilter = useMemo(
    () => filterKeys.filter((key) => filter[key] !== null),
    [filter]
  );

  return (
    <S.MainContainer>
      {/* 검색어 */}
      <S.SearchQueryWrapper>
        <S.IconWrapper>
          <MdSearch size={24} />
        </S.IconWrapper>
        <S.SearchQueryText>
          <S.SearchQuery>{query}</S.SearchQuery>에 대한 검색 결과입니다.
        </S.SearchQueryText>
      </S.SearchQueryWrapper>

      {/* 적용된 필터 */}
      <S.FilterSummaryWrapper palette={palette} layout>
        <S.FilterSummary onClick={handleFilterSummaryClick}>
          <S.FilterContainer>
            <AnimatePresence mode="popLayout" initial={false}>
              {appliedFilter.map((filterKey) => (
                <S.FilterPreview
                  key={filterKey}
                  detailKey={filterKey}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    layout: { type: "spring", stiffness: 100, damping: 20 },
                  }}
                  layout
                >
                  {getFilterValueText(filterKey, filter[filterKey])}
                </S.FilterPreview>
              ))}
            </AnimatePresence>

            {appliedFilter.length === 0 && (
              <S.NoFilter>필터를 설정하세요.</S.NoFilter>
            )}
          </S.FilterContainer>
          <S.IconWrapper>
            <MdChevronRight size={24} />
          </S.IconWrapper>
        </S.FilterSummary>
      </S.FilterSummaryWrapper>

      {/* 검색 결과 */}
      <S.JobContainer layout>
        {jobs.map((job, index) => (
          <>
            <DetailJobCard
              key={job.id}
              thumbnail={job.thumbnail}
              companyName={job.company}
              jobTitle={job.title}
              isBookmarked={job.isBookmarked}
              onClick={() => navigate(`/job/${job.id}`)}
              onBookmarkClick={() => {}}
              details={job.details}
            />
            {index < jobs.length - 1 && <S.Divider />}
          </>
        ))}
      </S.JobContainer>
    </S.MainContainer>
  );
}
