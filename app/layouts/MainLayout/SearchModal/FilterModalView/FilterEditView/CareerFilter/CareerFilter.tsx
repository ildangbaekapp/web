import { useMemo, useState } from "react";
import { MdSubdirectoryArrowRight } from "react-icons/md";

import RadioButton from "~/components/ui/RadioButton";
import type Filters from "~/types/filter";

import * as S from "./CareerFilter.styles";

type CareerOption = "newcomer" | "experience" | "any";

interface CareerFilterProps {
  value: Filters["career"];
  onChange: (value: Filters["career"]) => void;
}

export default function CareerFilter({ value, onChange }: CareerFilterProps) {
  // 경력 옵션 상태
  const selectedOption: CareerOption = useMemo(() => {
    if (value === null) return "any";
    if (value === 0) return "newcomer";
    return "experience";
  }, [value]);

  const [years, setYears] = useState(() =>
    value !== null && value > 0 ? value : 1
  );

  // 옵션 변경 핸들러
  const handleOptionChange = (option: CareerOption) => {
    if (option === "newcomer") onChange(0);
    else if (option === "any") onChange(null);
    else if (option === "experience") onChange(years > 0 ? years : 1);
  };

  // 경력 입력 핸들러
  const handleYearsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newYears = Math.min(30, parseInt(e.target.value, 10));
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
      {/* 신입 */}
      <S.OptionWrapper>
        <RadioButton
          checked={selectedOption === "newcomer"}
          onChange={() => handleOptionChange("newcomer")}
          label="신입"
        />
      </S.OptionWrapper>

      {/* 경력 */}
      <S.OptionWithInputWrapper>
        <RadioButton
          checked={selectedOption === "experience"}
          onChange={() => handleOptionChange("experience")}
          label="경력 설정"
        />
        <S.ExperienceInputWrapper>
          <S.IconWrapper>
            <MdSubdirectoryArrowRight />
          </S.IconWrapper>
          <S.YearInput
            name="years"
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
      </S.OptionWithInputWrapper>

      {/* 무관 */}
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
