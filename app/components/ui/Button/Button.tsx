import { useMemo } from "react";
import { useTheme } from "styled-components";

import type { Palette } from "~/components/ui/Feedback";

import * as S from "./Button.styles";
import type { ButtonProps } from "./Button.types";

export default function Button({
  icon,
  palette,
  color,
  children,
  disabled,
  ref,
  className,
  ...props
}: ButtonProps) {
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
      <S.Button
        disabled={disabled}
        $color={color ?? defaultColor}
        $hasIcon={icon !== undefined}
        {...props}
      >
        {icon !== undefined && (
          <S.IconWrapper $color={color ?? defaultColor}>{icon}</S.IconWrapper>
        )}
        {children}
      </S.Button>
    </S.ButtonFeedback>
  );
}
