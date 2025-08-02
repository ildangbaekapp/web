import { MdBookmark, MdChevronRight, MdSend, MdWork } from "react-icons/md";
import { useNavigate } from "react-router";
import { useTheme } from "styled-components";

import usePalette from "~/hooks/usePalette";

import * as S from "./MySection.styles";

interface MySectionProps {
  name: string;
}

export default function MySection({ name }: MySectionProps) {
  const navigate = useNavigate();
  const palette = usePalette("background");
  const theme = useTheme();

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
        <S.ActionButton
          onClick={() => navigate("/resume")}
          palette={palette}
          color={theme.colors.primary.normal}
        >
          <S.ActionButtonContent>
            <S.ActionButtonIcon>
              <MdWork />
            </S.ActionButtonIcon>
            <S.ActionButtonText>이력서</S.ActionButtonText>
          </S.ActionButtonContent>
        </S.ActionButton>
        <S.VerticalDivider />
        <S.ActionButton
          onClick={() => navigate("/applications")}
          palette={palette}
          color={theme.colors.primary.normal}
        >
          <S.ActionButtonContent>
            <S.ActionButtonIcon>
              <MdSend />
              <S.Badge>
                <S.BadgeText>2</S.BadgeText>
              </S.Badge>
            </S.ActionButtonIcon>
            <S.ActionButtonText>지원 공고</S.ActionButtonText>
          </S.ActionButtonContent>
        </S.ActionButton>
        <S.VerticalDivider />
        <S.ActionButton
          onClick={() => navigate("/bookmarks")}
          palette={palette}
          color={theme.colors.primary.normal}
        >
          <S.ActionButtonContent>
            <S.ActionButtonIcon>
              <MdBookmark />
            </S.ActionButtonIcon>
            <S.ActionButtonText>북마크</S.ActionButtonText>
          </S.ActionButtonContent>
        </S.ActionButton>
      </S.ButtonContainer>
    </S.Wrapper>
  );
}
