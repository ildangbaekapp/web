import styled from "styled-components";

export const CheckboxContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const IconWrapper = styled.div<{
  checked: boolean;
  size: "small" | "large";
}>`
  width: ${({ size }) => (size === "small" ? "20px" : "24px")};
  height: ${({ size }) => (size === "small" ? "20px" : "24px")};
  background: ${({ theme, checked }) =>
    checked ? theme.colors.primary : theme.colors.grey};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  transition: background-color 0.2s;
`;

export const Label = styled.span<{
  $isAllAgree?: boolean;
}>`
  font-size: ${({ $isAllAgree }) => ($isAllAgree ? "16px" : "14px")};
  font-weight: 500;
  color: ${({ theme, $isAllAgree }) =>
    $isAllAgree ? theme.colors.primary : theme.colors.darkGrey};
`;
