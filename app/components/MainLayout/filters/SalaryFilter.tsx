import { useMemo } from "react";

import Checkbox from "~/components/Checkbox";
import RangeSlider from "~/components/RangeSlider";
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

const getSalaryMinMax = (type: Salary["type"]): [number, number] => {
  switch (type) {
    case "hourly":
      return [10000, 100000];
    case "daily":
      return [10000, 800000];
    case "weekly":
      return [10000, 4000000];
    case "monthly":
      return [10000, 20000000];
    case "yearly":
      return [10000, 240000000];
    default:
      return [10000, 100000];
  }
};

const getSalaryRound = (type: Salary["type"]): number | false => {
  switch (type) {
    case "hourly":
      return 1000;
    case "daily":
      return 1000;
    case "weekly":
      return 10000;
    case "monthly":
      return 100000;
    case "yearly":
      return 1000000;
    default:
      return false;
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
      const [newMin, newMax] = getSalaryMinMax(value?.type ?? "hourly");
      onChange({
        ...value,
        min: Math.max(value.min, newMin),
        max: Math.min(value.max, newMax),
        type,
      });
    }
  };

  const [min, max] = useMemo(() => {
    return getSalaryMinMax(value?.type ?? "hourly");
  }, [value?.type]);

  const round = useMemo(
    () => getSalaryRound(value?.type ?? "hourly"),
    [value?.type]
  );

  return (
    <S.Wrapper>
      <S.SliderWrapper>
        <RangeSlider
          min={min}
          max={max}
          defaultRangeStart={value?.min ?? min}
          defaultRangeEnd={value?.max ?? max * 0.8}
          markers={[]}
          scaleMethod="square"
          round={round}
          disabled={isIrrelevant}
          priceToString={(value) => `${value.toLocaleString()}원`}
          onChange={(min, max) => {
            if (value) {
              onChange({ ...value, min, max });
            }
          }}
        />
      </S.SliderWrapper>
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
