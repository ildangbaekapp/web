import React from "react";
import { MdArrowForward } from "react-icons/md";
import { useNavigate } from "react-router";
import { useTheme } from "styled-components";

import Button from "~/components/ui/Button";
import usePalette from "~/hooks/usePalette";

import * as S from "./RegisterContentLayout.styles";
import RegisterTitle from "./RegisterTitle";

interface RegisterContentLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  onNext?: () => void;
  onCancel?: () => void;
  onPrev?: () => void;
  isNextDisabled?: boolean;
  nextButtonText?: string;
}

export default function RegisterContentLayout({
  title,
  description,
  children,
  onNext,
  onCancel,
  onPrev,
  isNextDisabled,
  nextButtonText = "다음",
}: RegisterContentLayoutProps) {
  const navigate = useNavigate();
  const theme = useTheme();
  const palette = usePalette("background");

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      navigate("/");
    }
  };

  const handlePrev = () => {
    if (onPrev) {
      onPrev();
    } else {
      navigate(-1);
    }
  };

  return (
    <S.PageContainer>
      <RegisterTitle title={title} description={description} />
      <S.Content>{children}</S.Content>
      <S.ButtonContainer>
        {onCancel && (
          <Button
            palette={palette}
            onClick={handleCancel}
            color={theme.colors.foreground.normal}
          >
            취소
          </Button>
        )}
        {onPrev && (
          <Button
            palette={palette}
            onClick={handlePrev}
            color={theme.colors.foreground.normal}
          >
            이전
          </Button>
        )}
        {onNext && (
          <Button
            onClick={onNext}
            disabled={isNextDisabled}
            icon={<MdArrowForward />}
          >
            {nextButtonText}
          </Button>
        )}
      </S.ButtonContainer>
    </S.PageContainer>
  );
}
