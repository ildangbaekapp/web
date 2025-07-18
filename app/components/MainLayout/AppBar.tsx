import { MdPersonOutline, MdSearch } from "react-icons/md";
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

  return (
    <S.AppBar>
      <S.Left>
        <S.Logo src={logo} alt="logo" onClick={handleLogoClick} />
        <S.SearchBox onClick={onSearchBoxClick}>
          <S.SearchBoxText>{query || "검색어를 입력하세요."}</S.SearchBoxText>
          <MdSearch size={24} color={theme.colors.grey} />
        </S.SearchBox>
      </S.Left>
      <S.Right>
        <IconButton
          icon={<MdPersonOutline size={32} />}
          onClick={handleProfileClick}
          color={theme.colors.darkGrey}
          size={36}
        />
      </S.Right>
    </S.AppBar>
  );
}
