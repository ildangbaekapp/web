import type { HTMLMotionProps, MotionNodeOptions } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";
import { useTheme } from "styled-components";
import type { Colors, ColorScheme } from "theme";

import * as S from "./Button.styles";

export type ButtonTransitionVariant = "scale" | "hover" | "none";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  colorScheme?: ColorScheme | keyof Colors;
  transitionVariant?: ButtonTransitionVariant;
  icon?: ReactNode;
}

export default function Button({
  children,
  colorScheme,
  transitionVariant = "scale",
  icon,
  disabled,
  ...props
}: ButtonProps) {
  const theme = useTheme();

  const [colors, setColors] = useState<ColorScheme>();
  const [transitions, setTransitions] = useState<MotionNodeOptions>({
    whileHover: {},
    whileTap: {},
    whileFocus: {},
    transition: {},
  });

  // 트랜지션 설정
  useEffect(() => {
    if (disabled) {
      setTransitions({
        whileHover: {},
        whileTap: {},
        whileFocus: {},
        transition: {},
      });
      return;
    }

    let newTransitions: MotionNodeOptions;

    // transitionVariant scale
    if (transitionVariant === "scale") {
      newTransitions = {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        whileFocus: { scale: 1.05 },
        transition: { type: "spring", stiffness: 400, damping: 17 },
      };
    }

    // transitionVariant hover
    else if (transitionVariant === "hover") {
      newTransitions = {
        whileHover: {
          y: -5,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)",
        },
        whileTap: {
          scale: 0.97,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)",
        },
        whileFocus: {
          y: -5,
          scale: 0.97,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)",
        },
        transition: { type: "spring", stiffness: 400, damping: 17 },
      };
    }

    // transitionVariant none
    else {
      newTransitions = {
        whileHover: {},
        whileTap: {},
        whileFocus: {},
        transition: {},
      };
    }

    setTransitions(newTransitions);
  }, [transitionVariant, disabled]);

  // 색상 설정
  useEffect(() => {
    if (disabled) {
      setColors({
        normal: theme.colors.secondary.normal,
        light: theme.colors.secondary.normal,
        dark: theme.colors.secondary.normal,
      });
      return;
    }

    // colorScheme이 Colors의 키인 경우
    if (typeof colorScheme === "string") {
      setColors(theme.colors[colorScheme]);
    }

    // colorScheme이 객체인 경우
    else if (colorScheme !== undefined) {
      setColors(colorScheme);
    }

    // colorScheme이 정의되지 않은 경우
    else {
      setColors({
        dark: theme.colors.primary.dark,
        light: theme.colors.primary.light,
        normal: theme.colors.primary.normal,
      });
    }
  }, [colorScheme, disabled]);

  return colors !== undefined ? (
    <S.StyledButton
      {...transitions}
      disabled={disabled}
      {...props}
      $colorScheme={colors}
    >
      {icon}
      {children}
    </S.StyledButton>
  ) : null;
}
