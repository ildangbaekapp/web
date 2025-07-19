import { useEffect } from "react";
import { MdPerson, MdSearch } from "react-icons/md";
import { useNavigate } from "react-router";
import { useTheme } from "styled-components";

import logo from "~/assets/logo.png";
import IconButton from "~/components/IconButton";
import { useSearchStore } from "~/store/searchStore";

import * as S from "./AppBar.styles";

interface AppBarProps {
  onSearchBoxClick: () => void;
}

export default function AppBar({ onSearchBoxClick }: AppBarProps) {
  const navigate = useNavigate();
  const theme = useTheme();
  const query = useSearchStore((state) => state.query);

  const handleLogoClick = () => {
    navigate("/");
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
        <S.Logo src={logo} alt="logo" onClick={handleLogoClick} />
        <S.SearchBox onClick={onSearchBoxClick}>
          <S.SearchBoxText>{query || "검색어를 입력하세요."}</S.SearchBoxText>
          <S.Right>
            <S.ShortcutWrapper>
              <S.ShortcutText>Ctrl + K</S.ShortcutText>
            </S.ShortcutWrapper>
            <MdSearch size={24} color={theme.colors.darkGrey} />
          </S.Right>
        </S.SearchBox>
      </S.Left>
      <S.Right>
        <IconButton
          icon={<MdPerson size={32} />}
          onClick={handleProfileClick}
          color={theme.colors.darkGrey}
          size={36}
        />
      </S.Right>
    </S.AppBar>
  );
}
