import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  justify-content: center;
  flex: 1;
`;

export const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  align-items: flex-start;
`;

export const TimeInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 100%;
`;

export const TimeFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 100%;
`;

export const TimeInput = styled.input`
  width: 60px;
  height: 100%;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  text-align: center;
  font-size: 24px;
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.colors.darkGrey};

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    cursor: not-allowed;
  }

  /* Hide number input arrows */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;

export const Divider = styled.span`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.grey};
`;

export const Tilde = styled.span`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 50px;
  cursor: pointer;
`;

export const Label = styled.span<{ $isSelected: boolean }>`
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.primary : theme.colors.darkGrey};
`;
