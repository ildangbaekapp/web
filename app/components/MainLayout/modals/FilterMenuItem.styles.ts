import styled from "styled-components";

export const MenuItem = styled.div<{
  $isSelected: boolean;
}>`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 10px 10px 20px;
  background: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.primaryBg : "transparent"};
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
  cursor: pointer;
  transition: background-color 0.2s;
  outline-offset: -1px;

  &:hover {
    background: ${({ theme, $isSelected }) =>
      !$isSelected && theme.colors.lightGrey};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 10px 0;
    justify-content: center;
    min-width: 100px;
    border-radius: 9999px;
  }
`;

export const Label = styled.div<{ $isSelected: boolean }>`
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.primary : theme.colors.darkGrey};
  font-size: 16px;
  font-weight: 500;
  word-wrap: break-word;
  white-space: nowrap;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

export const Content = styled.div`
  width: 160px;
  padding: 7px 10px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  outline: 1px solid ${({ theme }) => theme.colors.lightGrey};
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const Value = styled.div`
  flex: 1 1 0;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 12px;
  font-weight: 500;
  word-wrap: break-word;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const IconWrapper = styled.div`
  width: 18px;
  height: 18px;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const Dot = styled.div`
  width: 6px;
  height: 6px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
`;
