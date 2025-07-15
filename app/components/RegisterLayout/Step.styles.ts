import styled from "styled-components";

export const StepItem = styled.div<{ $isActive: boolean }>`
  align-self: stretch;
  padding: 15px;
  background: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primaryBg : "transparent"};
  overflow: hidden;
  border-radius: ${({ $isActive }) => ($isActive ? "20px" : "10px")};
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  display: inline-flex;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary : theme.colors.darkGrey};
`;

export const StepNumber = styled.div<{ $isActive: boolean }>`
  width: 28px;
  height: 28px;
  background: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary : theme.colors.darkGrey};
  overflow: hidden;
  border-radius: 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 22.4px;
`;

export const StepLabel = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 25.2px;
  word-wrap: break-word;
`;
