import styled, { css } from "styled-components";

import Feedback from "~/components/ui/Feedback";

interface RoleButtonWrapperProps {
  $selected: boolean;
}

export const Wrapper = styled(Feedback).attrs({
  transitionVariant: "hover",
})<RoleButtonWrapperProps>`
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.background.dark};

  ${({ $selected, theme }) =>
    $selected &&
    css`
      border-color: ${theme.colors.primary.normal};
    `};
`;

export const Content = styled.a`
  padding: min(30px, max(10px, 8vw));
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const IconWrapper = styled.div<RoleButtonWrapperProps>`
  min-width: 80px;
  width: 20vw;
  max-width: 120px;
  min-height: 80px;
  height: 20vw;
  max-height: 120px;
  background: ${({ theme }) => theme.colors.secondary.normal};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: ${({ theme }) => theme.colors.background.normal};
  transition: all 0.1s;

  ${({ $selected, theme }) =>
    $selected &&
    css`
      background-color: ${theme.colors.primary.normal};
      color: ${theme.colors.background.normal};
    `}
`;

export const Label = styled.div<RoleButtonWrapperProps>`
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.colors.secondary.normal};
  transition: color 0.1s;

  ${({ $selected, theme }) =>
    $selected &&
    css`
      color: ${theme.colors.primary.normal};
    `}
`;
