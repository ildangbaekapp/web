import React from "react";
import { MdCheck } from "react-icons/md";
import * as S from "./SimpleModalContent.styles";

interface SimpleModalContentProps {
  title: string;
  description: string;
  onConfirm: () => void;
}

export default function SimpleModalContent({
  title,
  description,
  onConfirm,
}: SimpleModalContentProps) {
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.ContentWrapper>
      <S.ConfirmButton icon={<MdCheck size={24} />} onClick={onConfirm}>
        확인
      </S.ConfirmButton>
    </S.Wrapper>
  );
}
