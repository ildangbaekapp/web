import {
  MdCategory,
  MdWorkHistory,
  MdViewWeek,
  MdMoney,
  MdSchedule,
  MdEmergencyShare,
  MdDateRange,
  MdLocationOn,
} from "react-icons/md";

import type Filters from "~/types/filter";
import getFilterLabel from "~/utils/getFilterLabel";
import getFilterValueText from "~/utils/getFilterValueText";

import * as S from "./FilterPreview.styles";

const getFilterIcon = (filter: keyof Filters) => {
  switch (filter) {
    case "type":
      return <MdCategory />;
    case "career":
      return <MdWorkHistory />;
    case "weekday":
      return <MdViewWeek />;
    case "salary":
      return <MdMoney />;
    case "time":
      return <MdSchedule />;
    case "recruitLocation":
      return <MdEmergencyShare />;
    case "duration":
      return <MdDateRange />;
    case "workLocation":
      return <MdLocationOn />;
    default:
      return null;
  }
};

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
        {getFilterIcon(filter)}
        {getFilterLabel(filter)}
      </S.Name>
      <S.Content>
        {getFilterValueText(filter, content) || "설정 안 함"}
      </S.Content>
    </S.Wrapper>
  );
}
