import { useTheme } from "styled-components";

import * as S from "./SnsButton.styles";

interface SnsButtonProps {
  provider: "kakao" | "google" | "naver" | "apple";
  icon: string;
  alt: string;
}

export default function SnsButton({ provider, icon, alt }: SnsButtonProps) {
  const theme = useTheme();

  const backgroundColors = {
    kakao: theme.colors.kakao,
    google: theme.colors.google,
    naver: theme.colors.naver,
    apple: theme.colors.apple,
  };

  return (
    <S.SnsButton $background={backgroundColors[provider]}>
      <img src={icon} alt={alt} />
    </S.SnsButton>
  );
}
