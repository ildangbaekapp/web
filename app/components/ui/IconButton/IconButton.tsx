import { useMemo } from "react";
import { useTheme } from "styled-components";

import type { Palette } from "~/components/ui/Feedback";

import * as S from "./IconButton.styles";
import type { IconButtonProps } from "./IconButton.types";

export default function IconButton({
  palette,
  children,
  disabled,
  color,
  ref,
  className,
  ...props
}: IconButtonProps) {
  const theme = useTheme();

  const disabledPalette: Palette = useMemo(
    () => ({
      normal: theme.colors.secondary.normal,
      hover: theme.colors.secondary.normal,
      tap: theme.colors.secondary.normal,
      focus: theme.colors.secondary.normal,
    }),
    [theme]
  );

  const defaultColor = useMemo(() => theme.colors.background.normal, [theme]);

  return (
    <S.ButtonFeedback
      palette={disabled ? disabledPalette : palette}
      transitionVariant={disabled ? "none" : "scale"}
      disabled={disabled}
      ref={ref}
      className={className}
    >
      <S.Button disabled={disabled} $color={color ?? defaultColor} {...props}>
        {children}
      </S.Button>
    </S.ButtonFeedback>
  );
}
