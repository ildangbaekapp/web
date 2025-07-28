import * as S from "./SnsButton.styles";

interface SnsButtonProps {
  provider: "kakao" | "google" | "naver" | "apple";
  icon: string;
  alt: string;
}

export default function SnsButton({ provider, icon, alt }: SnsButtonProps) {
  return (
    <S.SnsButton colorScheme={provider} aria-label={alt}>
      <img src={icon} alt={alt} />
    </S.SnsButton>
  );
}
