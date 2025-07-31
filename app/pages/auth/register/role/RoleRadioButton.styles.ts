import styled, { css } from "styled-components";

import Button from "~/components/ui/Button";

interface RoleButtonWrapperProps {
  $selected: boolean;
}

export const RoleButtonWrapper = styled(Button).attrs({
  transitionVariant: "hover",
})<RoleButtonWrapperProps>`
  height: auto;
  padding: 30px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.background.dark};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  ${({ $selected, theme }) =>
    $selected &&
    css`
      border-color: ${theme.colors.primaryBackground.dark};
    `}
`;

export const IconWrapper = styled.div<RoleButtonWrapperProps>`
  width: 120px;
  height: 120px;
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
