import type { Filters } from "job";
import { AnimatePresence } from "motion/react";
import { useMemo } from "react";
import { MdChevronRight } from "react-icons/md";

import DetailJobCard from "~/components/common/DetailJobCard";
import usePalette from "~/hooks/usePalette";
import { useModalStore } from "~/store/modalStore";
import { initialFilter, useSearchStore } from "~/store/searchStore";
import getFilterValueText from "~/utils/getFilterValueText";

import { jobs } from "./search.constants";
import * as S from "./search.styles";

const filterKeys = Object.keys(initialFilter) as (keyof Filters)[];

export default function SearchResult() {
  const { setModalState } = useModalStore();
  const filter = useSearchStore((state) => state.filter);
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

      <S.JobContainer>
        {jobs.map((job) => (
          <DetailJobCard
            key={job.id}
            thumbnail={"https://placehold.co/200"}
            companyName={job.company}
            jobTitle={job.title}
            isBookmarked={job.bookmarked}
            onBookmarkClick={() => {}}
            details={job.details}
          />
        ))}
      </S.JobContainer>
    </S.MainContainer>
  );
}
