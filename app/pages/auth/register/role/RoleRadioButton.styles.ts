import styled, { css } from "styled-components";

interface RoleButtonWrapperProps {
  $selected: boolean;
}

export const RoleButtonWrapper = styled.div<RoleButtonWrapperProps>`
  padding: 30px;
  border-radius: 10px;
  outline: 1px solid ${({ theme }) => theme.colors.darkGrey};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({ $selected, theme }) =>
    $selected &&
    css`
      outline-color: ${theme.colors.primary};
    `}
`;

export const IconWrapper = styled.div<RoleButtonWrapperProps>`
  width: 120px;
  height: 120px;
  background: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: ${({ theme }) => theme.colors.darkGrey};
  transition: all 0.2s ease-in-out;

  ${({ $selected, theme }) =>
    $selected &&
    css`
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    `}
`;

export const Label = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.32px;
`;
