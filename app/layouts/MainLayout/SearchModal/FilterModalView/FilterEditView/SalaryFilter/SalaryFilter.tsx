import { useMemo } from "react";

import Checkbox from "~/components/ui/Checkbox";
import RangeSlider from "~/components/ui/RangeSlider";
import usePalette from "~/hooks/usePalette";
import type { Salary } from "~/types/filter";
import getKoreanNumber from "~/utils/getKoreanNumber";

import {
  salaryTypes,
  salaryTypeText,
  salaryMinMax,
  salaryRound,
} from "./SalaryFilter.constants";
import * as S from "./SalaryFilter.styles";

interface SalaryFilterProps {
  value: Salary | null;
  onChange: (value: Salary | null) => void;
}

export default function SalaryFilter({ value, onChange }: SalaryFilterProps) {
  const [selectedPalette, normalPalette] = usePalette(["primary", "secondary"]);

  // 급여가 무관한지 여부
  const isIrrelevant = useMemo(() => value === null, [value]);

  // 무관 체크박스 핸들러
  const onIrrelevantChange = (checked: boolean) => {
    if (checked) {
      onChange(null);
    } else {
      onChange({
        type: "hourly",
        min: salaryMinMax["hourly"][0],
        max: salaryMinMax["hourly"][1] * 0.5,
      });
    }
  };

  // 급여 종류 변경 핸들러
  const handleTypeChange = (type: Salary["type"]) => {
    const [newMin, newMax] = salaryMinMax[type ?? "hourly"];
    onChange({
      ...value,
      min: newMin,
      max: newMax * 0.5,
      type,
    });
  };

  // 급여 종류별 최솟값, 최댓값 가져오기
  const [min, max] = useMemo(
    () => salaryMinMax[value?.type ?? "hourly"],
    [value?.type]
  );

  // 급여 종류별 반올림 단위 가져오기
  const round = useMemo(
    () => salaryRound[value?.type ?? "hourly"],
    [value?.type]
  );

  return (
    <S.Wrapper>
      {/* 급여 범위 슬라이더 */}
      <S.SliderWrapper>
        <RangeSlider
          min={min}
          max={max}
          start={value?.min ?? min}
          end={value?.max ?? max * 0.5}
          markers={[]}
          scaleMethod="square"
          round={round}
          disabled={isIrrelevant}
          toString={(value) => `${getKoreanNumber(value)}원`}
          onChange={(min, max) => {
            if (value) {
              onChange({ ...value, min, max });
            }
          }}
        />
      </S.SliderWrapper>

      {/* 급여 종류 버튼 */}
      <S.TypeButtonContainer>
        {salaryTypes.map((t) => (
          <S.TypeButtonWrapper
            key={t}
            palette={value?.type === t ? selectedPalette : normalPalette}
          >
            <S.TypeButton onClick={() => handleTypeChange(t)}>
              {salaryTypeText[t]}
            </S.TypeButton>
          </S.TypeButtonWrapper>
        ))}
      </S.TypeButtonContainer>

      {/* 급여 무관 체크박스 */}
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
