import { useState, useEffect, useRef } from "react";

import RadioButton from "~/components/RadioButton";
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
  const [selectedOption, setSelectedOption] = useState<TimeOption>(() => {
    if (value === "negotiable") return "negotiable";
    if (value === null) return "irrelevant";
    return "input";
  });

  const [startTime, setStartTime] = useState<Time["start"]>(
    value && typeof value === "object" ? value.start : { hour: 8, minute: 30 }
  );
  const [endTime, setEndTime] = useState<Time["end"]>(
    value && typeof value === "object" ? value.end : { hour: 17, minute: 30 }
  );

  const startHourRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (selectedOption === "input") {
      onChange({ start: startTime, end: endTime });
      startHourRef.current?.focus();
    } else if (selectedOption === "negotiable") {
      onChange("negotiable");
    } else {
      onChange(null);
    }
  }, [selectedOption]);

  const handleTimeChange = (
    part: "start" | "end",
    unit: "hour" | "minute",
    val: string
  ) => {
    const numVal = parseInt(val, 10);
    const setter = part === "start" ? setStartTime : setEndTime;
    const max = unit === "hour" ? 23 : 59;

    if (!isNaN(numVal) && numVal >= 0 && numVal <= max) {
      setter((prev) => {
        const newState = { ...prev, [unit]: numVal };
        if (selectedOption === "input") {
          onChange({
            start: part === "start" ? newState : startTime,
            end: part === "end" ? newState : endTime,
          });
        }
        return newState;
      });
    } else if (val === "") {
      setter((prev) => ({ ...prev, [unit]: 0 }));
    }
  };

  const isInputDisabled = selectedOption !== "input";

  return (
    <S.Wrapper>
      <S.TimeContainer>
        <S.OptionWrapper>
          <RadioButton
            checked={selectedOption === "input"}
            label={"직접 설정"}
            onChange={() => setSelectedOption("input")}
          />
        </S.OptionWrapper>

        <S.TimeInputContainer>
          <S.TimeFieldWrapper>
            <S.TimeInput
              ref={startHourRef}
              type="number"
              value={formatTime(startTime.hour)}
              onChange={(e) =>
                handleTimeChange("start", "hour", e.target.value)
              }
              disabled={isInputDisabled}
            />
            <S.Divider>:</S.Divider>
            <S.TimeInput
              type="number"
              value={formatTime(startTime.minute)}
              onChange={(e) =>
                handleTimeChange("start", "minute", e.target.value)
              }
              disabled={isInputDisabled}
            />
          </S.TimeFieldWrapper>
          <S.Tilde>~</S.Tilde>
          <S.TimeFieldWrapper>
            <S.TimeInput
              type="number"
              value={formatTime(endTime.hour)}
              onChange={(e) => handleTimeChange("end", "hour", e.target.value)}
              disabled={isInputDisabled}
            />
            <S.Divider>:</S.Divider>
            <S.TimeInput
              type="number"
              value={formatTime(endTime.minute)}
              onChange={(e) =>
                handleTimeChange("end", "minute", e.target.value)
              }
              disabled={isInputDisabled}
            />
          </S.TimeFieldWrapper>
        </S.TimeInputContainer>
      </S.TimeContainer>

      <S.OptionWrapper>
        <RadioButton
          checked={selectedOption === "negotiable"}
          onChange={() => setSelectedOption("negotiable")}
          label={"협의 가능"}
        />
      </S.OptionWrapper>

      <S.OptionWrapper>
        <RadioButton
          checked={selectedOption === "irrelevant"}
          onChange={() => setSelectedOption("irrelevant")}
          label={"무관"}
        />
      </S.OptionWrapper>
    </S.Wrapper>
  );
}
