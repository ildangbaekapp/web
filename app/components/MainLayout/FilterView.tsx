import { useState } from "react";
import { MdArrowBack, MdCheck, MdRefresh } from "react-icons/md";
import { useTheme } from "styled-components";

import Button from "~/components/Button";
import IconButton from "~/components/IconButton";
import {
  useSearchStore,
  initialFilter,
  type Filters,
} from "~/store/searchStore";
import * as Filter from "~/types/filter";

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

const getWeekdayText = (weekday: Filter.Weekday): string => {
  switch (weekday) {
    case "monday":
      return "월요일";
    case "tuesday":
      return "화요일";
    case "wednesday":
      return "수요일";
    case "thursday":
      return "목요일";
    case "friday":
      return "금요일";
    case "saturday":
      return "토요일";
    case "sunday":
      return "일요일";
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
        value = value as Exclude<Filters["type"], null>;
        if (value.length > 1) return `${value[0]} 외 ${value.length - 1}종`;
        return value[0] as string;
      }

      case "carreer": {
        value = value as Exclude<Filters["carreer"], null>;
        if (value === 0) return "신입";
        return `경력 ${value}년 이상`;
      }

      case "weekday": {
        value = value as Exclude<Filters["weekday"], null>;
        return value.map(getWeekdayText).join(", ") ?? "";
      }

      case "workLocation": {
        value = value as Exclude<Filters["workLocation"], null>;
        if (value.length > 1)
          return `${value[0].second} ${value[0].third} 외 ${
            value.length - 1
          }개`;
        return `${value[0].second} ${value[0].third}`;
      }

      case "salary": {
        value = value as Exclude<Filters["salary"], null>;
        return `${getSalaryTypeText(
          value.type
        )} ${value.min.toLocaleString()}원 ~ ${value.max.toLocaleString()}원`;
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
  const theme = useTheme();

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

  return (
    <S.Wrapper>
      <S.Header>
        <IconButton icon={<MdArrowBack size={24} />} onClick={onBack} />
        <S.Title>필터</S.Title>
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
          <div>{filterLabels[selectedFilter]} 설정</div>

          <S.Footer>
            <Button variant="secondary" onClick={handleResetAll}>
              전체 초기화
            </Button>
            <Button
              variant="secondary"
              style={{
                backgroundColor: theme.colors.lightGrey,
                border: "none",
              }}
              onClick={handleResetCurrent}
              icon={<MdRefresh size={24} />}
            >
              초기화
            </Button>
            <Button
              variant="primary"
              onClick={handleApply}
              icon={<MdCheck size={24} />}
            >
              적용
            </Button>
          </S.Footer>
        </S.ContentContainer>
      </S.Body>
    </S.Wrapper>
  );
}
