import styled, { css, type DefaultTheme } from "styled-components";

import type { InputVariant } from "./Input";

const getVariantStyles = (variant: InputVariant, theme: DefaultTheme) => {
  switch (variant) {
    case "outline":
      return css`
        border-radius: 5px;
        border: 1px solid ${theme.colors.grey};
        &:focus {
          border-color: ${theme.colors.primary};
          outline: none;
        }
      `;
    case "underline":
      return css`
        border: none;
        border-bottom: 1px solid ${theme.colors.grey};
        &:focus {
          border-color: ${theme.colors.primary};
          outline: none;
        }
      `;
    default:
      return css``;
  }
};

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
`;

export const StyledInput = styled.input<{ $variant?: InputVariant }>`
  flex-grow: 1;
  flex-shrink: 0;
  min-width: 0;
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }

  ${({ $variant = "outline", theme }) => getVariantStyles($variant, theme)}
`;
