import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  justify-content: center;
  flex: 1;
`;

export const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 50px;
  cursor: pointer;
  user-select: none;
`;

export const ExperienceInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Label = styled.span<{ $isSelected: boolean }>`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.primary : theme.colors.darkGrey};
`;

export const YearInput = styled.input`
  width: 50px;
  padding: 10px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  text-align: center;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.darkGrey};

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    cursor: not-allowed;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;
