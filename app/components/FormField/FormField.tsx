import React from "react";

import * as S from "./FormField.styles";

interface FormFieldProps {
  label?: string;
  required?: boolean;
  children: React.ReactNode;
  errorMessage?: string;
  htmlFor?: string;
}

export default function FormField({
  label,
  required,
  children,
  errorMessage,
  htmlFor,
}: FormFieldProps) {
  return (
    <S.FormFieldContainer>
      {label && (
        <S.LabelContainer>
          {required && <S.RequiredChip>필수</S.RequiredChip>}
          <S.Label htmlFor={htmlFor}>{label}</S.Label>
        </S.LabelContainer>
      )}
      {children}
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.FormFieldContainer>
  );
}
