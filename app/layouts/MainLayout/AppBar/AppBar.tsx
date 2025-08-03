import { useEffect } from "react";
import { MdPerson, MdSearch } from "react-icons/md";
import { useNavigate } from "react-router";

import logo from "~/assets/logo.png";
import IconButton from "~/components/ui/IconButton";
import usePalette from "~/hooks/usePalette";
import { useSearchStore } from "~/store/searchStore";

import * as S from "./AppBar.styles";

interface AppBarProps {
  onSearchBoxClick: () => void;
}

export default function AppBar({ onSearchBoxClick }: AppBarProps) {
  const navigate = useNavigate();
  const palette = usePalette("background");
  const query = useSearchStore((state) => state.query);

  const handleLogoClick = () => {
    navigate("/home");
  };

  const handleProfileClick = () => {
    navigate("/auth/login");
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        onSearchBoxClick();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onSearchBoxClick]);

  return (
    <S.AppBar>
      <S.Left>
        {/* 로고 */}
        <IconButton onClick={handleLogoClick} palette={palette}>
          <S.Logo src={logo} alt="logo" />
        </IconButton>

        {/* 검색 박스 */}
        <S.SearchBoxWrapper palette={palette}>
          <S.SearchBox onClick={onSearchBoxClick}>
            <S.SearchBoxText>{query || "검색어를 입력하세요."}</S.SearchBoxText>
            <S.Right>
              <S.ShortcutWrapper>
                <S.ShortcutText>Ctrl + K</S.ShortcutText>
              </S.ShortcutWrapper>
              <S.IconWrapper>
                <MdSearch size={24} />
              </S.IconWrapper>
            </S.Right>
          </S.SearchBox>
        </S.SearchBoxWrapper>
      </S.Left>

      <S.Right>
        {/* 프로필 아이콘 */}
        <IconButton onClick={handleProfileClick} palette={palette}>
          <S.IconWrapper>
            <MdPerson size={32} />
          </S.IconWrapper>
        </IconButton>
      </S.Right>
    </S.AppBar>
  );
}
