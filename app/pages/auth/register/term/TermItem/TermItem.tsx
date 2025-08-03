import { MdChevronRight } from "react-icons/md";
import { useTheme } from "styled-components";

import Checkbox from "~/components/Checkbox";
import IconButton from "~/components/ui/IconButton";
import usePalette from "~/hooks/usePalette";

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
  const theme = useTheme();
  const palette = usePalette("background");

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
        <IconButton
          onClick={onDetailClick}
          palette={palette}
          color={theme.colors.secondary.normal}
        >
          <MdChevronRight size={30} />
        </IconButton>
      )}
    </S.TermItemWrapper>
  );
}
