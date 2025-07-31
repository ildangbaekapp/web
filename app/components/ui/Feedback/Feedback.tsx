import usePalette from "~/hooks/usePalette";

import { transitions } from "./Feedback.constants";
import * as S from "./Feedback.styles";
import type { FeedbackProps, Palette } from "./Feedback.types";

export default function Feedback({
  transitionVariant = "scale",
  palette,
  ...props
}: FeedbackProps) {
  // 기본 팔레트 설정
  const defaultPalette: Palette = usePalette("primary");

  return (
    <S.Wrapper
      $palette={palette ?? defaultPalette}
      {...props}
      {...transitions[transitionVariant]}
    />
  );
}
