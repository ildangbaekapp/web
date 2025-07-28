import styled from "styled-components";

export const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const RequiredChip = styled.span`
  color: ${({ theme }) => theme.colors.primary.normal};
  font-size: 14px;
  font-weight: 700;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.foreground.normal};
  font-size: 16px;
  font-weight: 500;
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.red.normal};
  font-size: 16px;
  font-weight: 500;
`;
