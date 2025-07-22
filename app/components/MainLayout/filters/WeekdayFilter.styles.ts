import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  justify-content: center;
  flex: 1;
`;

export const DayButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const DayButton = styled.button<{ $isSelected: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.primary : theme.colors.grey};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const NegotiableWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
