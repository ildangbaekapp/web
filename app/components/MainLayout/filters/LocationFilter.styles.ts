import styled from "styled-components";

import Button from "~/components/Button";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const Body = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

export const Column = styled.div`
  flex: 1;
  overflow-y: auto;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.background.light};

  &:last-child {
    border-right: none;
  }
`;

export const Item = styled.button<{
  $isSelected: boolean;
  $hasChildren: boolean;
}>`
  height: 40px;
  padding: 0 15px;
  border: none;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily};
  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.primaryBackground.normal : "transparent"};
  color: ${({ theme, $isSelected, $hasChildren }) =>
    $isSelected
      ? theme.colors.primary.normal
      : $hasChildren
      ? theme.colors.foreground.light
      : theme.colors.secondary.normal};
  font-weight: ${({ $isSelected }) => ($isSelected ? 700 : 400)};
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: ${({ theme, $isSelected }) =>
      !$isSelected && theme.colors.background.light};
  }
`;

export const SelectedLocationsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  padding: 0 5px;
  height: 60px;
  box-sizing: border-box;
  border-top: 1px solid ${({ theme }) => theme.colors.background.light};
  width: 100%;
  overflow-x: scroll;
`;

export const SelectedLocationTag = styled(Button).attrs({
  colorScheme: "background",
})`
  align-items: center;
  flex-shrink: 0;
  gap: 5px;
  padding: 5px 10px;
  height: 30px;
  box-sizing: border-box;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.primary.normal};
  color: ${({ theme }) => theme.colors.primary.normal};
  font-size: 14px;
  font-weight: 500;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
