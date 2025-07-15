import React from "react";
import { MdArrowForward } from "react-icons/md";
import { useNavigate } from "react-router";


import Button from "~/components/Button";

import * as S from "./RegisterPageLayout.styles";
import RegisterStepTop from "./RegisterStepTop";



interface RegisterPageLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  onNext?: () => void;
  onCancel?: () => void;
  onPrev?: () => void;
  isNextDisabled?: boolean;
  nextButtonText?: string;
}

export default function RegisterPageLayout({
  title,
  description,
  children,
  onNext,
  onCancel,
  onPrev,
  isNextDisabled,
  nextButtonText = "다음",
}: RegisterPageLayoutProps) {
  const navigate = useNavigate();

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
      <RegisterStepTop title={title} description={description} />
      <S.Content>{children}</S.Content>
      <S.ButtonContainer>
        {onCancel && (
          <Button variant="secondary" onClick={handleCancel}>
            취소
          </Button>
        )}
        {onPrev && (
          <Button variant="secondary" onClick={handlePrev}>
            이전
          </Button>
        )}
        {onNext && (
          <Button
            onClick={onNext}
            disabled={isNextDisabled}
            icon={<MdArrowForward size={24} />}
          >
            {nextButtonText}
          </Button>
        )}
      </S.ButtonContainer>
    </S.PageContainer>
  );
}
