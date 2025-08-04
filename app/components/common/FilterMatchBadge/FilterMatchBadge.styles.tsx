import styled from "styled-components";

export const Wrapper = styled.div<{ $isMatch: boolean }>`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${({ theme, $isMatch }) =>
    $isMatch ? theme.colors.primary.normal : theme.colors.red.normal};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-weight: 500;

  transition: color 0.3s;
`;

export const IconWrapper = styled.div<{ $isMatch: boolean }>`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ theme, $isMatch }) =>
    $isMatch ? theme.colors.primary.normal : theme.colors.red.normal};
  color: ${({ theme }) => theme.colors.background.normal};
`;
