import { motion } from "motion/react";
import styled from "styled-components";

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
  border-right: 1px solid ${({ theme }) => theme.colors.lightGrey};

  &:last-child {
    border-right: none;
  }
`;

export const Item = styled.div<{ $isSelected: boolean; $hasChildren: boolean }>`
  height: 40px;
  padding: 0 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.primaryBg : "transparent"};
  color: ${({ theme, $isSelected, $hasChildren }) =>
    $isSelected
      ? theme.colors.primary
      : $hasChildren
      ? theme.colors.darkGrey
      : theme.colors.grey};
  font-weight: ${({ $isSelected }) => ($isSelected ? 700 : 400)};

  &:hover {
    background-color: ${({ theme, $isSelected }) =>
      !$isSelected && theme.colors.lightGrey};
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
  border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
  width: 100%;
  overflow-x: scroll;
`;

export const SelectedLocationTag = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 5px;
  padding: 5px 10px;
  height: 30px;
  box-sizing: border-box;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
