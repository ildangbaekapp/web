import type { Weekday } from "job";
import { useMemo } from "react";

import Checkbox from "~/components/ui/Checkbox";
import usePalette from "~/hooks/usePalette";

import { weekdays } from "./WeekdayFilter.constants";
import * as S from "./WeekdayFilter.styles";

interface WeekdayFilterProps {
  value: Weekday[] | null;
  onChange: (value: Weekday[] | null) => void;
}

export default function WeekdayFilter({ value, onChange }: WeekdayFilterProps) {
  const [selectedPalette, normalPalette] = usePalette(["primary", "secondary"]);

  const isNegotiable = useMemo(() => value === null, [value]);
  const selectedDays = useMemo(() => value || [], [value]);

  // 요일 클릭 핸들러
  const handleDayClick = (day: Weekday) => {
    const newSelection = selectedDays.includes(day)
      ? selectedDays.filter((d) => d !== day)
      : [...selectedDays, day];

    if (newSelection.length === 0) {
      onChange(null);
    } else {
      onChange(newSelection);
    }
  };

  // 협의 체크박스 핸들러
  const handleNegotiableChange = (checked: boolean) => {
    if (checked) {
      onChange(null);
    } else {
      onChange(weekdays.map((day) => day.value));
    }
  };

  return (
    <S.Wrapper>
      <S.DayButtonContainer>
        {weekdays.map((day) => (
          <S.DayButtonWrapper
            key={day.value}
            palette={
              value?.includes(day.value) ? selectedPalette : normalPalette
            }
          >
            <S.DayButton onClick={() => handleDayClick(day.value)}>
              {day.label}
            </S.DayButton>
          </S.DayButtonWrapper>
        ))}
      </S.DayButtonContainer>
      <S.NegotiableWrapper>
        <Checkbox
          label="협의"
          checked={isNegotiable}
          onChange={handleNegotiableChange}
        />
      </S.NegotiableWrapper>
    </S.Wrapper>
  );
}
