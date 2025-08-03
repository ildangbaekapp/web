import type Filters from "~/types/filter";
import getFilterLabel from "~/utils/getFilterLabel";
import getFilterValueText from "~/utils/getFilterValueText";

import FilterIcon from "./FilterIcon";
import * as S from "./FilterPreview.styles";

interface ConditionPreviewProps<K extends keyof Filters> {
  filter: K;
  content: Filters[K];
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}

export default function FilterPreview<K extends keyof Filters>({
  filter,
  content,
  className,
  ref,
}: ConditionPreviewProps<K>) {
  return (
    <S.Wrapper className={className} ref={ref}>
      <S.Name>
        <FilterIcon filter={filter} />
        {getFilterLabel(filter)}
      </S.Name>
      <S.Content>
        {getFilterValueText(filter, content) || "설정 안 함"}
      </S.Content>
    </S.Wrapper>
  );
}
