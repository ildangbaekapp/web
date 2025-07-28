import Checkbox from "~/components/Checkbox";
import type { Salary } from "~/types/filter";

import * as S from "./SalaryFilter.styles";

interface SalaryFilterProps {
  value: Salary | null;
  onChange: (value: Salary | null) => void;
}

const salaryTypes: Salary["type"][] = [
  "hourly",
  "daily",
  "weekly",
  "monthly",
  "yearly",
];

const getSalaryTypeText = (type: Salary["type"]): string => {
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

export default function SalaryFilter({ value, onChange }: SalaryFilterProps) {
  const isIrrelevant = value === null;

  const onIrrelevantChange = (checked: boolean) => {
    if (checked) {
      onChange(null);
    } else {
      onChange({ type: "hourly", min: 0, max: 0 });
    }
  };

  const handleTypeChange = (type: Salary["type"]) => {
    if (isIrrelevant) {
      onChange({ type, min: 0, max: 0 });
    } else {
      onChange({ ...value, type });
    }
  };

  return (
    <S.Wrapper>
      <S.SliderWrapper></S.SliderWrapper>
      <S.TypeButtonContainer>
        {salaryTypes.map((t) => (
          <S.TypeButton
            key={t}
            onClick={() => handleTypeChange(t)}
            colorScheme={value?.type === t ? "primary" : "secondary"}
          >
            {getSalaryTypeText(t)}
          </S.TypeButton>
        ))}
      </S.TypeButtonContainer>
      <S.IrrelevantWrapper>
        <Checkbox
          label="급여 무관"
          checked={isIrrelevant}
          onChange={onIrrelevantChange}
        />
      </S.IrrelevantWrapper>
    </S.Wrapper>
  );
}
