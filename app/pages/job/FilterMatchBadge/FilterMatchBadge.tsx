import { MdCheck, MdClose } from "react-icons/md";

import * as S from "./FilterMatchBadge.styles";

interface FilterMatchBadgeProps {
  isMatch?: boolean;
}

export default function FilterMatchBadge({
  isMatch = true,
}: FilterMatchBadgeProps) {
  return (
    <S.Wrapper $isMatch={isMatch}>
      <S.IconWrapper $isMatch={isMatch}>
        {isMatch ? <MdCheck size={18} /> : <MdClose size={18} />}
      </S.IconWrapper>
      {isMatch
        ? "이 공고는 필터 조건에 일치해요."
        : "이 공고는 필터 조건에 일치하지 않아요."}
    </S.Wrapper>
  );
}
