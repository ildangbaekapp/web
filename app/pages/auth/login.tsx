import { useState } from "react";
import logoSrc from "~/assets/logo.png";
import { S } from "./login.styles";
import {
  KakaoIcon,
  GoogleIcon,
  NaverIcon,
  AppleIcon,
} from "~/components/icons";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { username, password });
  };

  const handleSocialLogin = (provider: string) => {
    // Handle social login logic here
    console.log("Social login with:", provider);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.TopSection>
          <S.Logo src={logoSrc} alt="로고" />
          <S.Form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <S.InputContainer>
              <S.InputField
                type="text"
                placeholder="아이디"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <S.InputField
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </S.InputContainer>
            <S.ActionContainer>
              <S.LoginButton type="submit">로그인</S.LoginButton>
              <S.LinkContainer>
                <S.LinkText href="/auth/find-id">아이디 찾기</S.LinkText>
                <S.Divider />
                <S.LinkText href="/auth/find-password">
                  비밀번호 찾기
                </S.LinkText>
                <S.Divider />
                <S.LinkText href="/auth/register">회원가입</S.LinkText>
              </S.LinkContainer>
            </S.ActionContainer>
          </S.Form>
        </S.TopSection>

        <S.SocialSection>
          <S.SocialTitle>
            <S.SocialLine />
            <S.SocialTitleText>SNS 계정으로 로그인</S.SocialTitleText>
            <S.SocialLine />
          </S.SocialTitle>
          <S.SocialButtonContainer>
            <S.SocialButton
              $provider="kakao"
              onClick={() => handleSocialLogin("kakao")}
              aria-label="카카오 로그인"
            >
              <KakaoIcon />
            </S.SocialButton>
            <S.SocialButton
              $provider="google"
              onClick={() => handleSocialLogin("google")}
              aria-label="구글 로그인"
            >
              <GoogleIcon />
            </S.SocialButton>
            <S.SocialButton
              $provider="naver"
              onClick={() => handleSocialLogin("naver")}
              aria-label="네이버 로그인"
            >
              <NaverIcon />
            </S.SocialButton>
            <S.SocialButton
              $provider="apple"
              onClick={() => handleSocialLogin("apple")}
              aria-label="애플 로그인"
            >
              <AppleIcon />
            </S.SocialButton>
          </S.SocialButtonContainer>
        </S.SocialSection>
      </S.Wrapper>
    </S.Container>
  );
}
