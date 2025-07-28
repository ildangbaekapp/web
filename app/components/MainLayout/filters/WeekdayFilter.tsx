import Checkbox from "~/components/Checkbox";
import { Weekday } from "~/types/filter";

import * as S from "./WeekdayFilter.styles";

interface WeekdayFilterProps {
  value: Weekday[] | null;
  onChange: (value: Weekday[] | null) => void;
}

const weekdays: { label: string; value: Weekday }[] = [
  { label: "일", value: Weekday.SUNDAY },
  { label: "월", value: Weekday.MONDAY },
  { label: "화", value: Weekday.TUESDAY },
  { label: "수", value: Weekday.WEDNESDAY },
  { label: "목", value: Weekday.THURSDAY },
  { label: "금", value: Weekday.FRIDAY },
  { label: "토", value: Weekday.SATURDAY },
];

export default function WeekdayFilter({ value, onChange }: WeekdayFilterProps) {
  const isNegotiable = value === null;
  const selectedDays = value || [];

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
          <S.DayButton
            key={day.value}
            onClick={() => handleDayClick(day.value)}
            colorScheme={
              selectedDays.includes(day.value) ? "primary" : "secondary"
            }
          >
            {day.label}
          </S.DayButton>
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
