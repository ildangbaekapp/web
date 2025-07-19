import { MdBookmark, MdChevronRight, MdSend, MdWork } from "react-icons/md";
import { useNavigate } from "react-router";

import * as S from "./MySection.styles";

interface MySectionProps {
  name: string;
}

export default function MySection({ name }: MySectionProps) {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderButton>
          <S.Profile src="https://placehold.co/40x40" alt="profile" />
          <S.Welcome>{name}님, 환영합니다.</S.Welcome>
        </S.HeaderButton>
        <S.ChevronRight>
          <MdChevronRight size={24} />
        </S.ChevronRight>
      </S.Header>
      <S.ButtonContainer>
        <S.ActionButton onClick={() => navigate("/resume")}>
          <S.ActionButtonIcon>
            <MdWork />
          </S.ActionButtonIcon>
          <S.ActionButtonText>이력서</S.ActionButtonText>
        </S.ActionButton>
        <S.VerticalDivider />
        <S.ActionButton onClick={() => navigate("/applications")}>
          <S.ActionButtonIcon>
            <MdSend />
            <S.Badge>
              <S.BadgeText>2</S.BadgeText>
            </S.Badge>
          </S.ActionButtonIcon>
          <S.ActionButtonText>지원 공고</S.ActionButtonText>
        </S.ActionButton>
        <S.VerticalDivider />
        <S.ActionButton onClick={() => navigate("/bookmarks")}>
          <S.ActionButtonIcon>
            <MdBookmark />
          </S.ActionButtonIcon>
          <S.ActionButtonText>북마크</S.ActionButtonText>
        </S.ActionButton>
      </S.ButtonContainer>
    </S.Wrapper>
  );
}
