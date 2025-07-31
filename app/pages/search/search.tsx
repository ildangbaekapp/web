import { AnimatePresence } from "motion/react";
import { useMemo } from "react";
import { MdChevronRight } from "react-icons/md";

import FilterPreview from "~/components/FilterPreview/FilterPreview";
import { useModalStore } from "~/store/modalStore";
import { initialFilter, useSearchStore } from "~/store/searchStore";
import type Filters from "~/types/filter";

import * as S from "./search.styles";

const jobs = [
  {
    id: 1,
    company: "CJ대한통운",
    title: "상하차 인력 구합니다 !!!",
    salary: "일 120,000원",
    bookmarked: true,
    details: {
      type: "상하차",
      experience: "무관",
      weekday: "무관",
      time: "협의",
      location: "강남구 신사동",
      duration: "1일",
      workplace: "서구 대곡동",
      experienceYears: "경력 무관",
    },
  },
  {
    id: 2,
    company: "CJ대한통운",
    title: "상하차 인력 구합니다 !!!",
    salary: "일 120,000원",
    bookmarked: true,
    details: {
      type: "상하차",
      experience: "무관",
      weekday: "무관",
      time: "협의",
      location: "강남구 신사동",
      duration: "1일",
      workplace: "서구 대곡동",
      experienceYears: "경력 무관",
    },
  },
  {
    id: 3,
    company: "CJ대한통운",
    title: "상하차 인력 구합니다 !!!",
    salary: "일 120,000원",
    bookmarked: true,
    details: {
      type: "상하차",
      experience: "무관",
      weekday: "무관",
      time: "협의",
      location: "강남구 신사동",
      duration: "1일",
      workplace: "서구 대곡동",
      experienceYears: "경력 무관",
    },
  },
  {
    id: 4,
    company: "CJ대한통운",
    title: "상하차 인력 구합니다 !!!",
    salary: "일 120,000원",
    bookmarked: true,
    details: {
      type: "상하차",
      experience: "무관",
      weekday: "무관",
      time: "협의",
      location: "강남구 신사동",
      duration: "1일",
      workplace: "서구 대곡동",
      experienceYears: "경력 무관",
    },
  },
];

const filterKeys = Object.keys(initialFilter) as (keyof Filters)[];

export default function SearchResult() {
  const { setModalState } = useModalStore();
  const filter = useSearchStore((state) => state.filter);

  const handleFilterClick = () => {
    setModalState("filter");
  };

  const appliedFilter = useMemo(
    () => filterKeys.filter((key) => filter[key] !== null),
    [filter]
  );

  return (
    <S.MainContainer>
      <S.Filter onClick={handleFilterClick}>
        <S.FilterContainer>
          <AnimatePresence mode="popLayout">
            {appliedFilter.map((key) => (
              <S.StyledFilterPreview
                key={key}
                filter={key}
                content={filter[key]}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  layout: { type: "spring", stiffness: 100, damping: 20 },
                }}
                layout
              />
            ))}
          </AnimatePresence>

          {appliedFilter.length === 0 && (
            <S.NoFilter>필터를 설정하세요.</S.NoFilter>
          )}
        </S.FilterContainer>
        <S.IconWrapper>
          <MdChevronRight size={24} />
        </S.IconWrapper>
      </S.Filter>
    </S.MainContainer>
  );
}
