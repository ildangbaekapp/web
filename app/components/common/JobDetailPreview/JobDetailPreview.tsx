import type { Details } from "@types";

import getJobDetailLabel from "~/utils/getJobDetailLabel";

import Icon from "./Icon";
import * as S from "./JobDetailPreview.styles";

interface JobDetailPreviewProps {
  detailKey: keyof Details;
  children?: React.ReactNode;
  className?: string;
  direction?: "row" | "column";
  ref?: React.Ref<HTMLDivElement>;
}

export default function JobDetailPreview({
  detailKey,
  children,
  className,
  direction = "column",
  ref,
}: JobDetailPreviewProps) {
  return (
    <S.Wrapper $direction={direction} className={className} ref={ref}>
      <S.Name>
        <Icon detailKey={detailKey} />
        {getJobDetailLabel(detailKey)}
      </S.Name>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
}
