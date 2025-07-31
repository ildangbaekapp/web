import { useState } from "react";
import { MdArrowBack, MdCheck, MdRefresh } from "react-icons/md";

import IconButton from "~/components/ui/IconButton";
import { useSearchStore, initialFilter } from "~/store/searchStore";
import type Filters from "~/types/filter";
import getFilterValueText from "~/utils/getFilterValueText";

import CareerFilter from "../filters/CareerFilter";
import DurationFilter from "../filters/DurationFilter";
import LocationFilter from "../filters/LocationFilter";
import SalaryFilter from "../filters/SalaryFilter";
import TimeFilter from "../filters/TimeFilter";
import TypeFilter from "../filters/TypeFilter";
import WeekdayFilter from "../filters/WeekdayFilter";

import FilterMenuItem from "./FilterMenuItem";
import * as S from "./FilterView.styles";

const filterLabels: { [key in keyof Filters]: string } = {
  type: "업종",
  carreer: "경력",
  weekday: "요일",
  salary: "급여",
  time: "근무 시간",
  recruitLocation: "모집 지역",
  duration: "계약 기간",
  workLocation: "근무지",
};

interface FilterViewProps {
  onBack: () => void;
}

export default function FilterView({ onBack }: FilterViewProps) {
  const { filter, setFilter } = useSearchStore();
  const [selectedFilter, setSelectedFilter] = useState<keyof Filters>("type");
  const [tempFilter, setTempFilter] = useState(filter);

  const handleApply = () => {
    setFilter(tempFilter);
    onBack();
  };

  const handleResetAll = () => {
    setTempFilter(initialFilter);
  };

  const handleResetCurrent = () => {
    setTempFilter((prev) => ({
      ...prev,
      [selectedFilter]: initialFilter[selectedFilter],
    }));
  };

  const isModified = (key: keyof Filters) => {
    return JSON.stringify(tempFilter[key]) !== JSON.stringify(filter[key]);
  };

  const handleFilterChange = <K extends keyof Filters>(
    key: K,
    value: Filters[K]
  ) => {
    setTempFilter((prev) => ({ ...prev, [key]: value }));
  };

  const renderFilterContent = () => {
    switch (selectedFilter) {
      case "type":
        return (
          <TypeFilter
            value={tempFilter.type}
            onChange={(value) => handleFilterChange("type", value)}
          />
        );
      case "carreer":
        return (
          <CareerFilter
            value={tempFilter.carreer}
            onChange={(value) => handleFilterChange("carreer", value)}
          />
        );
      case "weekday":
        return (
          <WeekdayFilter
            value={tempFilter.weekday}
            onChange={(value) => handleFilterChange("weekday", value)}
          />
        );
      case "salary":
        return (
          <SalaryFilter
            value={tempFilter.salary}
            onChange={(value) => handleFilterChange("salary", value)}
          />
        );
      case "time":
        return (
          <TimeFilter
            value={tempFilter.time}
            onChange={(value) => handleFilterChange("time", value)}
          />
        );
      case "recruitLocation":
        return (
          <LocationFilter
            value={tempFilter.recruitLocation}
            onChange={(value) => handleFilterChange("recruitLocation", value)}
          />
        );
      case "workLocation":
        return (
          <LocationFilter
            value={tempFilter.workLocation}
            onChange={(value) => handleFilterChange("workLocation", value)}
          />
        );
      case "duration":
        return (
          <DurationFilter
            value={tempFilter.duration}
            onChange={(value) => handleFilterChange("duration", value)}
          />
        );
      default:
        return <div>{filterLabels[selectedFilter]} 설정</div>;
    }
  };

  return (
    <S.Wrapper>
      <S.Header>
        <IconButton icon={<MdArrowBack size={24} />} onClick={onBack} />
        <S.Title>검색 필터</S.Title>
      </S.Header>
      <S.Body>
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
          {renderFilterContent()}
          <S.Footer>
            <S.ResetButton onClick={handleResetAll} colorScheme={"background"}>
              전체 초기화
            </S.ResetButton>
            <S.ResetButton
              onClick={handleResetCurrent}
              colorScheme={"background"}
              icon={<MdRefresh size={24} />}
            >
              초기화
            </S.ResetButton>
            <S.ApplyButton onClick={handleApply} icon={<MdCheck size={24} />}>
              적용
            </S.ApplyButton>
          </S.Footer>
        </S.ContentContainer>
      </S.Body>
    </S.Wrapper>
  );
}
