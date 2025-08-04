import styled from "styled-components";

import Feedback from "~/components/ui/Feedback";

export const ButtonWrapper = styled(Feedback)<{ $isSelected: boolean }>`
  flex: 1 1;
  border-radius: 24px;
  border: 1px solid
    ${({ theme, $isSelected }) =>
      $isSelected
        ? theme.colors.primary.normal
        : theme.colors.background.light};
`;

export const Button = styled.a`
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const Circle = styled.div<{ $isSelected: boolean; $size: string }>`
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  background: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.primary.normal : theme.colors.background.light};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: ${({ theme, $isSelected }) =>
    $isSelected
      ? theme.colors.background.normal
      : theme.colors.foreground.light};
  transition: all 0.2s ease-in-out;
`;

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;

  > svg {
    width: 100%;
    height: 100%;
  }
`;

export const Label = styled.div<{ $fontSize: string }>`
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: 500;
`;
