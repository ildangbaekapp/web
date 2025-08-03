import { useMemo, useState } from "react";

import RadioButton from "~/components/RadioButton";
import type Filters from "~/types/filter";
import type { duration } from "~/types/filter";

import * as S from "./DurationFilter.styles";

type DurationOption = "input" | "negotiable" | "irrelevant";

interface DurationFilterProps {
  value: Filters["duration"];
  onChange: (value: Filters["duration"]) => void;
}

export default function DurationFilter({
  value,
  onChange,
}: DurationFilterProps) {
  // 기간 옵션 상태
  const selectedOption: DurationOption = useMemo(() => {
    if (value === "negotiable") return "negotiable";
    if (value === null) return "irrelevant";
    return "input";
  }, [value]);

  const [duration, setDuration] = useState<duration>(() => {
    if (value && typeof value === "object") {
      return value;
    }
    return { min: 1, max: 3 };
  });

  // 옵션 변경 핸들러
  const handleOptionChange = (option: DurationOption) => {
    if (option === "input") {
      onChange(duration);
    } else if (option === "negotiable") {
      onChange("negotiable");
    } else if (option === "irrelevant") {
      onChange(null);
    }
  };

  // 기간 입력 핸들러
  const handleDurationChange = (part: "min" | "max", val: string) => {
    const numVal = parseInt(val, 10);

    if (isNaN(numVal) && val !== "") return;

    const newDurationValue = val === "" ? 1 : Math.max(1, numVal);

    setDuration(prev => {
      const newState = { ...prev, [part]: newDurationValue };
      if (selectedOption === "input") {
        onChange(newState);
      }
      return newState;
    });
  };

  const isInputDisabled = selectedOption !== "input";

  return (
    <S.Wrapper>
      {/* 직접 설정 */}
      <S.OptionWrapper>
        <RadioButton
          checked={selectedOption === "input"}
          onChange={() => handleOptionChange("input")}
          label="직접 설정"
        />
        <S.DurationInputContainer>
          <S.DurationFieldWrapper>
            <S.DurationInput
              name="min-duration"
              type="number"
              value={duration.min}
              onChange={e => handleDurationChange("min", e.target.value)}
              onFocus={() => handleOptionChange("input")}
              disabled={isInputDisabled}
              min="1"
            />
            <S.Suffix>개월</S.Suffix>
          </S.DurationFieldWrapper>
          <S.Tilde>~</S.Tilde>
          <S.DurationFieldWrapper>
            <S.DurationInput
              name="max-duration"
              type="number"
              value={duration.max}
              onChange={e => handleDurationChange("max", e.target.value)}
              onFocus={() => handleOptionChange("input")}
              disabled={isInputDisabled}
              min="1"
            />
            <S.Suffix>개월</S.Suffix>
          </S.DurationFieldWrapper>
        </S.DurationInputContainer>
      </S.OptionWrapper>

      {/* 협의 가능 */}
      <S.OptionWrapper>
        <RadioButton
          checked={selectedOption === "negotiable"}
          onChange={() => handleOptionChange("negotiable")}
          label="협의 가능"
        />
      </S.OptionWrapper>

      {/* 무관 */}
      <S.OptionWrapper>
        <RadioButton
          checked={selectedOption === "irrelevant"}
          onChange={() => handleOptionChange("irrelevant")}
          label="무관"
        />
      </S.OptionWrapper>
    </S.Wrapper>
  );
}