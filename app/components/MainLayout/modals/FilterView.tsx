import { useState } from "react";
import { MdArrowBack, MdCheck, MdRefresh } from "react-icons/md";

import IconButton from "~/components/IconButton";
import {
  useSearchStore,
  initialFilter,
  type Filters,
} from "~/store/searchStore";
import * as Filter from "~/types/filter";

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

const getTypeText = (type: Filter.Type): string => {
  switch (type) {
    case Filter.Type.INDUSTRY:
      return "공장";
    case Filter.Type.DELIVERY:
      return "배달";
    case Filter.Type.FLEX:
      return "통합";
    case Filter.Type.CARGO:
      return "상하차";
    default:
      return type;
  }
};

const getWeekdayText = (weekday: Filter.Weekday): string => {
  switch (weekday) {
    case "monday":
      return "월";
    case "tuesday":
      return "화";
    case "wednesday":
      return "수";
    case "thursday":
      return "목";
    case "friday":
      return "금";
    case "saturday":
      return "토";
    case "sunday":
      return "일";
    default:
      return weekday;
  }
};

const getSalaryTypeText = (type: Filter.Salary["type"]): string => {
  switch (type) {
    case "hourly":
      return "시급";
    case "daily":
      return "일급";
    case "weekly":
      return "주급";
    case "monthly":
      return "월급";
    case "yearly":
      return "연봉";
    default:
      return type;
  }
};

const formatTime = (time: { hour: number; minute: number }) =>
  `${time.hour.toString().padStart(2, "0")}:${time.minute
    .toString()
    .padStart(2, "0")}`;

const getFilterValueText = (
  key: keyof Filters,
  value: Filters[keyof Filters]
): string => {
  try {
    if (value === null || (Array.isArray(value) && value.length === 0)) {
      return "설정 안 함";
    }
    switch (key) {
      case "type": {
        const typeValue = value as Exclude<Filters["type"], null>;
        if (typeValue.length > 1)
          return `${getTypeText(typeValue[0])} 외 ${typeValue.length - 1}종`;
        return getTypeText(typeValue[0]) as string;
      }

      case "carreer": {
        const careerValue = value as Exclude<Filters["carreer"], null>;
        if (careerValue === 0) return "신입";
        return `경력 ${careerValue}년 이상`;
      }

      case "weekday": {
        const weekdays = value as Exclude<Filters["weekday"], null>;
        if (weekdays === null) return "협의";
        return weekdays.map(getWeekdayText).join(", ") ?? "";
      }

      case "recruitLocation":
      case "workLocation": {
        const locations = value as Exclude<
          Filters["recruitLocation" | "workLocation"],
          null
        >;
        if (locations.length > 1)
          return `${locations[0].second} ${locations[0].third} 외 ${
            locations.length - 1
          }개`;
        return `${locations[0].second} ${locations[0].third}`;
      }

      case "salary": {
        const salary = value as Exclude<Filters["salary"], null>;
        if (salary === null) return "급여 무관";
        return `${getSalaryTypeText(
          salary.type
        )} ${salary.min.toLocaleString()}원 ~ ${salary.max.toLocaleString()}원`;
      }

      case "time": {
        const time = value as Filters["time"];
        if (time === "negotiable") return "협의";
        if (time === null) return "시간 무관";
        if (typeof time === "object") {
          return `${formatTime(time.start)} ~ ${formatTime(time.end)}`;
        }
        return "설정 안 함";
      }

      case "duration": {
        const duration = value as Filters["duration"];
        if (duration === "negotiable") return "협의";
        if (duration === null) return "기간 무관";
        if (typeof duration === "object") {
          return `${duration.min}일 ~ ${duration.max}일`;
        }
        return "설정 안 함";
      }

      default:
        return "설정됨";
    }
  } catch {
    return "설정 오류";
  }
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
