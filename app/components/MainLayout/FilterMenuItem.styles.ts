import styled from "styled-components";

export const MenuItem = styled.div<{ $isSelected: boolean }>`
  width: 255px;
  padding: 10px 10px 10px 20px;
  background: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.primaryBg : "transparent"};
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme, $isSelected }) =>
      !$isSelected && theme.colors.lightGrey};
  }
`;

export const Label = styled.div<{ $isSelected: boolean }>`
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.primary : theme.colors.darkGrey};
  font-size: 16px;
  font-weight: 500;
`;

export const Content = styled.div`
  width: 120px;
  padding: 7px 10px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  outline: 1px solid ${({ theme }) => theme.colors.lightGrey};
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 5px;
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
