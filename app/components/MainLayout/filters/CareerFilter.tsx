import { useState } from "react";

import RadioButton from "~/components/RadioButton";
import type { Filters } from "~/store/searchStore";

import * as S from "./CareerFilter.styles";

type CareerOption = "newcomer" | "experience" | "any";

interface CareerFilterProps {
  value: Filters["carreer"];
  onChange: (value: Filters["carreer"]) => void;
}

export default function CareerFilter({ value, onChange }: CareerFilterProps) {
  const [selectedOption, setSelectedOption] = useState<CareerOption>(() => {
    if (value === 0) return "newcomer";
    if (value === null) return "any";
    if (typeof value === "number" && value > 0) return "experience";
    return "any";
  });

  const [years, setYears] = useState(() =>
    typeof value === "number" && value > 0 ? value : 1
  );

  const handleOptionChange = (option: CareerOption) => {
    setSelectedOption(option);
    if (option === "newcomer") onChange(0);
    else if (option === "any") onChange(null);
    else if (option === "experience") onChange(years > 0 ? years : 1);
  };

  const handleYearsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newYears = parseInt(e.target.value, 10);
    if (!isNaN(newYears) && newYears > 0) {
      setYears(newYears);
      if (selectedOption === "experience") {
        onChange(newYears);
      }
    } else if (e.target.value === "") {
      setYears(1);
      if (selectedOption === "experience") {
        onChange(1);
      }
    }
  };

  return (
    <S.Wrapper>
      <S.OptionWrapper>
        <RadioButton
          checked={selectedOption === "newcomer"}
          onChange={() => handleOptionChange("newcomer")}
          label="신입"
        />
      </S.OptionWrapper>

      <S.OptionWrapper>
        <RadioButton
          checked={selectedOption === "experience"}
          onChange={() => handleOptionChange("experience")}
          label="경력 설정"
        />
        <S.ExperienceInputWrapper>
          <S.YearInput
            type="number"
            value={years}
            onChange={handleYearsChange}
            onClick={(e) => e.stopPropagation()}
            onFocus={() => handleOptionChange("experience")}
            disabled={selectedOption !== "experience"}
            min="1"
          />
          <S.Label>년 이상</S.Label>
        </S.ExperienceInputWrapper>
      </S.OptionWrapper>

      <S.OptionWrapper>
        <RadioButton
          checked={selectedOption === "any"}
          onChange={() => handleOptionChange("any")}
          label="경력 무관"
        />
      </S.OptionWrapper>
    </S.Wrapper>
  );
}
