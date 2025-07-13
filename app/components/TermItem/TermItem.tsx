import { MdChevronRight } from "react-icons/md";

import Checkbox from "~/components/Checkbox";

import * as S from "./TermItem.styles";


export default function TermItem({
  term,
  checked,
  onChange,
  onDetailClick,
}: {
  term: {
    label: string;
    description: string;
    required: boolean;
    hasDetailPage: boolean;
  };
  checked: boolean;
  onChange: (checked: boolean) => void;
  onDetailClick?: () => void;
}) {
  return (
    <S.TermItemWrapper>
      <S.TermContent>
        <S.TermTitle>
          {term.required ? (
            <S.RequiredChip>필수</S.RequiredChip>
          ) : (
            <S.OptionalChip>선택</S.OptionalChip>
          )}
          <S.TermLabel>{term.label}</S.TermLabel>
        </S.TermTitle>
        <Checkbox
          checked={checked}
          onChange={onChange}
          label={term.description}
        />
      </S.TermContent>
      {term.hasDetailPage && (
        <S.ChevronIcon onClick={onDetailClick}>
          <MdChevronRight />
        </S.ChevronIcon>
      )}
    </S.TermItemWrapper>
  );
}
