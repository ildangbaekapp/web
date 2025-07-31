import usePalette from "~/hooks/usePalette";

import * as S from "./SnsButtons.styles";

interface SnsButtonProps {
  provider: "kakao" | "google" | "naver" | "apple";
  icon: string;
  alt: string;
  onClick?: () => void;
}

export default function SnsButton({
  provider,
  icon,
  alt,
  onClick,
}: SnsButtonProps) {
  const palette = usePalette(provider);

  return (
    <S.SnsButton palette={palette} onClick={onClick}>
      <img src={icon} alt={alt} />
    </S.SnsButton>
  );
}
