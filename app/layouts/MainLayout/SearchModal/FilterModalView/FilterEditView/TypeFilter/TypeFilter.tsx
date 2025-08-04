import type { JobType } from "job";
import { useCallback, useMemo } from "react";

import { typeOptions } from "./TypeFilter.constants";
import * as S from "./TypeFilter.styles";

interface TypeFilterProps {
  value: JobType[] | null;
  onChange: (value: JobType[] | null) => void;
}

export default function TypeFilter({ value, onChange }: TypeFilterProps) {
  const selectedTypes = useMemo(() => value || [], [value]);
  const isSelected = useCallback(
    (type: JobType) => selectedTypes.includes(type),
    [selectedTypes]
  );

  const handleTypeClick = (type: JobType) => {
    const newSelection = isSelected(type)
      ? selectedTypes.filter((t) => t !== type)
      : [...selectedTypes, type];
    onChange(newSelection.length > 0 ? newSelection : null);
  };

  return (
    <S.Wrapper>
      {typeOptions.map((option) => (
        <S.TypeButton
          key={option.name}
          isSelected={isSelected(option.name)}
          onClick={() => handleTypeClick(option.name)}
          icon={option.icon}
          label={option.label}
        />
      ))}
    </S.Wrapper>
  );
}
