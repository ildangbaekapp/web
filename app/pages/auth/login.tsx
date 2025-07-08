import { useState } from "react";
import logoSrc from "~/assets/logo.png"
import { S } from "./login.styles";

const KakaoIcon = () => (
  <svg width="24" height="22" viewBox="0 0 24 22" fill="none">
    <path
      d="M12.1247 0C5.41283 0 0 4.33019 0 9.58708C0 13.0004 2.25172 15.988 5.62931 17.6939L4.48613 22.0636C4.46457 22.1276 4.46126 22.1963 4.47656 22.262C4.49185 22.3278 4.52515 22.388 4.57273 22.4359C4.64211 22.4971 4.73138 22.531 4.82389 22.5312C4.90059 22.525 4.97336 22.4947 5.03174 22.4446L9.95084 19.1277C10.677 19.2279 11.409 19.2799 12.142 19.2835C18.8452 19.2835 24.2667 14.9533 24.2667 9.58708C24.2667 4.22085 18.8278 0 12.1247 0Z"
      fill="#392020"
    />
  </svg>
);

const GoogleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M12.1333 10.0094V14.7083H18.6632C18.3765 16.2194 17.516 17.499 16.2255 18.3594L20.1633 21.4148C22.4576 19.2971 23.7812 16.1865 23.7812 12.4914C23.7812 11.631 23.704 10.8037 23.5606 10.0095L12.1333 10.0094Z"
      fill="white"
    />
    <path
      d="M5.33337 14.5249L4.44525 15.2047L1.30156 17.6534C3.29804 21.6132 7.38999 24.3487 12.133 24.3487C15.4089 24.3487 18.1555 23.2678 20.163 21.4148L16.2252 18.3594C15.1442 19.0874 13.7654 19.5286 12.133 19.5286C8.97834 19.5286 6.29804 17.3998 5.33833 14.5319L5.33337 14.5249Z"
      fill="white"
    />
    <path
      d="M1.30156 6.77759C0.474325 8.41 0 10.2522 0 12.2155C0 14.1789 0.474325 16.021 1.30156 17.6534C1.30156 17.6644 5.33871 14.5208 5.33871 14.5208C5.09605 13.7928 4.95261 13.0207 4.95261 12.2154C4.95261 11.4101 5.09605 10.638 5.33871 9.91L1.30156 6.77759Z"
      fill="white"
    />
    <path
      d="M12.1333 4.91348C13.9202 4.91348 15.5085 5.53116 16.777 6.72245L20.2515 3.24795C18.1447 1.28459 15.4093 0.0822067 12.1333 0.0822067C7.39022 0.0822067 3.29804 2.80669 1.30156 6.77761L5.33859 9.91026C6.29817 7.04231 8.97857 4.91348 12.1333 4.91348Z"
      fill="white"
    />
  </svg>
);

const NaverIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M0.424973 1.59741V22.8336H8.59552V12.2091L15.7055 22.8336H23.8891V1.59741H15.7055V12.2091L8.59552 1.59741H0.424973Z"
      fill="white"
    />
  </svg>
);

const AppleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M22.0342 18.9935C21.6672 19.8414 21.2328 20.6218 20.7295 21.3393C20.0435 22.3174 19.4818 22.9944 19.0489 23.3704C18.3778 23.9875 17.6588 24.3036 16.8889 24.3216C16.3362 24.3216 15.6696 24.1643 14.8937 23.8452C14.1153 23.5277 13.3999 23.3704 12.7457 23.3704C12.0597 23.3704 11.3239 23.5277 10.5369 23.8452C9.74879 24.1643 9.11379 24.3306 8.62832 24.347C7.89001 24.3785 7.15407 24.0534 6.41951 23.3704C5.95067 22.9615 5.36425 22.2605 4.66174 21.2674C3.90801 20.2068 3.28833 18.9771 2.80285 17.575C2.28293 16.0607 2.0223 14.5942 2.0223 13.1745C2.0223 11.5483 2.37371 10.1456 3.07757 8.9702C3.63074 8.02605 4.36666 7.28129 5.28772 6.73456C6.20877 6.18783 7.20397 5.90922 8.27572 5.89139C8.86214 5.89139 9.63118 6.07279 10.5868 6.42929C11.5398 6.78699 12.1517 6.96838 12.4199 6.96838C12.6205 6.96838 13.3003 6.75628 14.4526 6.33342C15.5423 5.94127 16.4621 5.779 17.2155 5.84296C19.2571 6.00773 20.7909 6.81255 21.811 8.2625C20.0051 9.36885 19.1052 10.9184 19.1233 12.906C19.1398 14.4545 19.6947 15.743 20.7864 16.7661C21.2777 17.241 21.8273 17.608 22.439 17.8686C22.3102 18.2596 22.1755 18.6341 22.0342 18.9935ZM17.3518 0.568054C17.3518 1.78166 16.9084 2.91481 16.0246 3.96355C14.9581 5.21039 13.6681 5.93089 12.2693 5.81719C12.2514 5.67159 12.2411 5.51836 12.2411 5.35733C12.2411 4.19227 12.7483 2.94542 13.649 1.92595C14.0986 1.40977 14.6705 0.98058 15.3641 0.638211C16.0561 0.300924 16.7107 0.114407 17.3263 0.0824661C17.3443 0.244709 17.3518 0.40697 17.3518 0.568033V0.568054Z"
      fill="white"
    />
  </svg>
);

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
      <S.LoginForm>
        <S.TopSection>
          <S.Logo
            src={logoSrc}
            alt="로고"
          />
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
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
          </form>
        </S.TopSection>

        <S.SocialSection>
          <S.SocialTitle>
            <S.SocialLine />
            <S.SocialTitleText>SNS 계정으로 로그인</S.SocialTitleText>
            <S.SocialLine />
          </S.SocialTitle>
          <S.SocialButtonContainer>
            <S.SocialButton
              $bgColor="#FEE600"
              onClick={() => handleSocialLogin("kakao")}
              aria-label="카카오 로그인"
            >
              <KakaoIcon />
            </S.SocialButton>
            <S.SocialButton
              $bgColor="#4286F5"
              onClick={() => handleSocialLogin("google")}
              aria-label="구글 로그인"
            >
              <GoogleIcon />
            </S.SocialButton>
            <S.SocialButton
              $bgColor="#21C607"
              onClick={() => handleSocialLogin("naver")}
              aria-label="네이버 로그인"
            >
              <NaverIcon />
            </S.SocialButton>
            <S.SocialButton
              $bgColor="#000000"
              onClick={() => handleSocialLogin("apple")}
              aria-label="애플 로그인"
            >
              <AppleIcon />
            </S.SocialButton>
          </S.SocialButtonContainer>
        </S.SocialSection>
      </S.LoginForm>
    </S.Container>
  );
}
