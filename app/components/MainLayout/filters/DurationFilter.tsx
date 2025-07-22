import { useState, useEffect, useRef } from "react";

import RadioButton from "~/components/RadioButton";
import type { Filters } from "~/store/searchStore";
import type { duration } from "~/types/filter";

import * as S from "./DurationFilter.styles";

type DurationOption = "input" | "negotiable" | "irrelevant";

interface DurationFilterProps {
  value: Filters["duration"];
  onChange: (value: Filters["duration"]) => void;
}

export default function DurationFilter({ value, onChange }: DurationFilterProps) {
  const [selectedOption, setSelectedOption] = useState<DurationOption>(() => {
    if (value === "negotiable") return "negotiable";
    if (value === null) return "irrelevant";
    return "input";
  });

  const [duration, setDuration] = useState<duration>(
    value && typeof value === "object" ? value : { min: 1, max: 100 }
  );

  const minRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (selectedOption === "input") {
      onChange(duration);
      minRef.current?.focus();
    } else if (selectedOption === "negotiable") {
      onChange("negotiable");
    } else {
      onChange(null);
    }
  }, [selectedOption]);

  const handleDurationChange = (part: "min" | "max", val: string) => {
    const numVal = parseInt(val, 10);
    if (!isNaN(numVal) && numVal > 0) {
      const newDuration = { ...duration, [part]: numVal };
      setDuration(newDuration);
      if (selectedOption === "input") {
        onChange(newDuration);
      }
    } else if (val === "") {
      const newDuration = { ...duration, [part]: 1 };
      setDuration(newDuration);
      if (selectedOption === "input") {
        onChange(newDuration);
      }
    }
  };

  const isInputDisabled = selectedOption !== "input";

  return (
    <S.Wrapper>
      <S.DurationContainer>
        <S.OptionWrapper onClick={() => setSelectedOption("input")}>
          <RadioButton
            checked={selectedOption === "input"}
            onChange={() => {}}
          />
          <S.Label $isSelected={selectedOption === "input"}>직접 설정</S.Label>
        </S.OptionWrapper>

        <S.DurationInputContainer>
          <S.DurationFieldWrapper>
            <S.DurationInput
              ref={minRef}
              type="number"
              value={duration.min}
              onChange={(e) => handleDurationChange("min", e.target.value)}
              onFocus={() => setSelectedOption("input")}
              disabled={isInputDisabled}
              min="1"
            />
            <S.Suffix>일</S.Suffix>
          </S.DurationFieldWrapper>
          <S.Tilde>~</S.Tilde>
          <S.DurationFieldWrapper>
            <S.DurationInput
              type="number"
              value={duration.max}
              onChange={(e) => handleDurationChange("max", e.target.value)}
              onFocus={() => setSelectedOption("input")}
              disabled={isInputDisabled}
              min="1"
            />
            <S.Suffix>일</S.Suffix>
          </S.DurationFieldWrapper>
        </S.DurationInputContainer>
      </S.DurationContainer>

      <S.OptionWrapper onClick={() => setSelectedOption("negotiable")}>
        <RadioButton
          checked={selectedOption === "negotiable"}
          onChange={() => {}}
        />
        <S.Label $isSelected={selectedOption === "negotiable"}>협의</S.Label>
      </S.OptionWrapper>

      <S.OptionWrapper onClick={() => setSelectedOption("irrelevant")}>
        <RadioButton
          checked={selectedOption === "irrelevant"}
          onChange={() => {}}
        />
        <S.Label $isSelected={selectedOption === "irrelevant"}>
          계약 기간 무관
        </S.Label>
      </S.OptionWrapper>
    </S.Wrapper>
  );
}