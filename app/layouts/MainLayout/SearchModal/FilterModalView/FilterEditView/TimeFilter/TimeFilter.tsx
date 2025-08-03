import { useMemo, useState } from "react";
import { MdSubdirectoryArrowRight } from "react-icons/md";

import RadioButton from "~/components/ui/RadioButton";
import type Filters from "~/types/filter";
import type { Time } from "~/types/filter";

import * as S from "./TimeFilter.styles";

type TimeOption = "input" | "negotiable" | "irrelevant";

interface TimeFilterProps {
  value: Filters["time"];
  onChange: (value: Filters["time"]) => void;
}

const formatTime = (num: number) => num.toString().padStart(2, "0");

export default function TimeFilter({ value, onChange }: TimeFilterProps) {
  // 시간 옵션 상태
  const selectedOption: TimeOption = useMemo(() => {
    if (value === "negotiable") return "negotiable";
    if (value === null) return "irrelevant";
    return "input";
  }, [value]);

  const [time, setTime] = useState<Time>(() => {
    if (value && typeof value === "object") {
      return value;
    }
    return { start: { hour: 9, minute: 0 }, end: { hour: 18, minute: 0 } };
  });

  // 옵션 변경 핸들러
  const handleOptionChange = (option: TimeOption) => {
    if (option === "input") {
      onChange(time);
    } else if (option === "negotiable") {
      onChange("negotiable");
    } else if (option === "irrelevant") {
      onChange(null);
    }
  };

  // 시간 입력 핸들러
  const handleTimeChange = (
    part: "start" | "end",
    unit: "hour" | "minute",
    val: string
  ) => {
    const numVal = parseInt(val, 10);
    const max = unit === "hour" ? 23 : 59;

    if (isNaN(numVal) && val !== "") return;

    const newTimeValue = val === "" ? 0 : Math.min(max, Math.max(0, numVal));

    setTime((prev) => {
      const newPart = { ...prev[part], [unit]: newTimeValue };
      const newState = { ...prev, [part]: newPart };

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
      <S.OptionWithInputWrapper>
        <RadioButton
          checked={selectedOption === "input"}
          onChange={() => handleOptionChange("input")}
          label="직접 설정"
        />
        <S.TimeInputContainer>
          <S.IconWrapper>
            <MdSubdirectoryArrowRight />
          </S.IconWrapper>
          <S.TimeFieldWrapper>
            <S.TimeInput
              name="start-hour"
              type="number"
              value={formatTime(time.start.hour)}
              onChange={(e) =>
                handleTimeChange("start", "hour", e.target.value)
              }
              onFocus={() => handleOptionChange("input")}
              disabled={isInputDisabled}
            />
            <S.Divider>:</S.Divider>
            <S.TimeInput
              name="start-minute"
              type="number"
              value={formatTime(time.start.minute)}
              onChange={(e) =>
                handleTimeChange("start", "minute", e.target.value)
              }
              onFocus={() => handleOptionChange("input")}
              disabled={isInputDisabled}
            />
          </S.TimeFieldWrapper>
          <S.Tilde>~</S.Tilde>
          <S.TimeFieldWrapper>
            <S.TimeInput
              name="end-hour"
              type="number"
              value={formatTime(time.end.hour)}
              onChange={(e) => handleTimeChange("end", "hour", e.target.value)}
              onFocus={() => handleOptionChange("input")}
              disabled={isInputDisabled}
            />
            <S.Divider>:</S.Divider>
            <S.TimeInput
              name="end-minute"
              type="number"
              value={formatTime(time.end.minute)}
              onChange={(e) =>
                handleTimeChange("end", "minute", e.target.value)
              }
              onFocus={() => handleOptionChange("input")}
              disabled={isInputDisabled}
            />
          </S.TimeFieldWrapper>
        </S.TimeInputContainer>
      </S.OptionWithInputWrapper>

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
