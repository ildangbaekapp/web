import { MdSearch, MdPersonOutline } from "react-icons/md";
import { useNavigate } from "react-router";

import logo from "~/assets/logo.png";
import theme from "~/styles/theme";

import * as S from "./AppBar.styles";

export default function AppBar() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <S.AppBar>
      <S.Left>
        <S.Logo src={logo} alt="logo" onClick={handleLogoClick} />
        <S.SearchBox>
          <S.SearchBoxText>검색어를 입력하세요.</S.SearchBoxText>
          <MdSearch size={24} color={theme.colors.grey} />
        </S.SearchBox>
      </S.Left>
      <S.Right>
        <MdPersonOutline size={32} color={theme.colors.darkGrey} />
      </S.Right>
    </S.AppBar>
  );
}
