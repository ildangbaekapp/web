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
`;

export const DurationInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const DurationFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const DurationInput = styled.input`
  width: 50px;
  padding: 10px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.background.light};
  text-align: center;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily};
  background-color: ${({ theme }) => theme.colors.background.normal};
  color: ${({ theme }) => theme.colors.foreground.light};

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary.normal};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.background.light};
    cursor: not-allowed;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;

export const Suffix = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.foreground.light};
  white-space: nowrap;
`;

export const Tilde = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.foreground.light};
  margin: 0 5px;
`;