import { useNavigate } from "react-router";
import { useTheme } from "styled-components";

import AppleIcon from "~/assets/apple.svg";
import GoogleIcon from "~/assets/google.svg";
import KakaoIcon from "~/assets/kakao.svg";
import LogoSrc from "~/assets/logo.png";
import NaverIcon from "~/assets/naver.svg";
import Input from "~/components/Input";

import * as S from "./login.styles";

export default function LoginPage() {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleRegisterClick = () => {
    navigate("/auth/register/term");
  };

  return (
    <S.Container>
      <S.LoginBox>
        <S.TopSection>
          <S.Logo src={LogoSrc} />
          <S.InputFields>
            <S.InputWrapper>
              <Input variant="login" placeholder="아이디 또는 이메일" />
            </S.InputWrapper>
            <S.InputWrapper>
              <Input variant="login" type="password" placeholder="비밀번호" />
            </S.InputWrapper>
          </S.InputFields>
          <S.AuthButtons>
            <S.LoginButton>로그인</S.LoginButton>
            <S.AuthLinks>
              <S.AuthLink>아이디 찾기</S.AuthLink>
              <S.Divider />
              <S.AuthLink>비밀번호 찾기</S.AuthLink>
              <S.Divider />
              <S.AuthLink onClick={handleRegisterClick}>회원가입</S.AuthLink>
            </S.AuthLinks>
          </S.AuthButtons>
        </S.TopSection>
        <S.BottomSection>
          <S.SnsLoginText>
            <S.SnsLoginDivider />
            <S.SnsLoginLabel>SNS 계정으로 로그인</S.SnsLoginLabel>
            <S.SnsLoginDivider />
          </S.SnsLoginText>
          <S.SnsButtons>
            <S.SnsButton $background={theme.colors.kakao}>
              <img src={KakaoIcon} alt="kakao" />
            </S.SnsButton>
            <S.SnsButton $background={theme.colors.google}>
              <img src={GoogleIcon} alt="google" />
            </S.SnsButton>
            <S.SnsButton $background={theme.colors.naver}>
              <img src={NaverIcon} alt="naver" />
            </S.SnsButton>
            <S.SnsButton $background={theme.colors.apple}>
              <img src={AppleIcon} alt="apple" />
            </S.SnsButton>
          </S.SnsButtons>
        </S.BottomSection>
      </S.LoginBox>
    </S.Container>
  );
}
