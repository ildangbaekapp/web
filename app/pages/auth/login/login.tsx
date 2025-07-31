import { useState } from "react";
import { useNavigate } from "react-router";

import AppleIcon from "~/assets/apple.svg";
import GoogleIcon from "~/assets/google.svg";
import KakaoIcon from "~/assets/kakao.svg";
import LogoSrc from "~/assets/logo.png";
import NaverIcon from "~/assets/naver.svg";
import Input from "~/components/Input";
import usePalette from "~/hooks/usePalette";
import { useUserStore } from "~/store/userStore";

import * as S from "./login.styles";
import SnsButton from "./SnsButton";

export default function LoginPage() {
  const palette = usePalette("primary");
  const navigate = useNavigate();
  const { setId, setEmail, setName, setRole } = useUserStore();

  const [email, setEmailInput] = useState("");
  const [password, setPasswordInput] = useState("");

  const handleLoginClick = () => {
    // example login logic
    setId(1);
    setEmail(email);
    setName("홍길동");
    setRole("jobSeeker");
    navigate("/home");
  };

  const handleRegisterClick = () => {
    navigate("/auth/register/term");
  };

  const isLoginButtonDisabled = email === "" || password === "";

  return (
    <S.Container>
      <S.LoginBox>
        <S.TopSection>
          <S.Logo src={LogoSrc} />
          <S.InputFields>
            <Input
              autoFocus
              variant="underline"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmailInput(e.target.value)}
            />
            <Input
              variant="underline"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
          </S.InputFields>
          <S.AuthButtons>
            <S.LoginButton
              palette={palette}
              onClick={handleLoginClick}
              disabled={isLoginButtonDisabled}
            >
              로그인
            </S.LoginButton>
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
            <SnsButton
              provider="kakao"
              icon={KakaoIcon}
              alt="카카오로 로그인"
            />
            <SnsButton
              provider="google"
              icon={GoogleIcon}
              alt="Google로 로그인"
            />
            <SnsButton
              provider="naver"
              icon={NaverIcon}
              alt="네이버로 로그인"
            />
            <SnsButton provider="apple" icon={AppleIcon} alt="Apple로 로그인" />
          </S.SnsButtons>
        </S.BottomSection>
      </S.LoginBox>
    </S.Container>
  );
}
