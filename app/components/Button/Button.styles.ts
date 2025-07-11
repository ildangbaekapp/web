import styled, { css } from "styled-components";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  $variant?: ButtonVariant;
}

const getVariantStyles = (variant: ButtonVariant, theme: any) => {
  switch (variant) {
    case "primary":
      return css`
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        &:disabled {
          background-color: ${theme.colors.grey};
          cursor: not-allowed;
        }
      `;
    case "secondary":
      return css`
        background-color: ${theme.colors.white};
        color: ${theme.colors.darkGrey};
        border: 1px solid ${theme.colors.grey};
      `;
    default:
      return css``;
  }
};

export const StyledButton = styled.button<ButtonProps>`
  height: 48px;
  padding: 15px 20px;
  border-radius: 5px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fontFamily};
  border: none;
  cursor: pointer;
  white-space: nowrap;

  ${({ $variant = "primary", theme }) => getVariantStyles($variant, theme)}
`;
