import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: ${({ theme }) => theme.fontFamily};
  border-radius: 20px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1;
  padding: 10px;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const RequiredChip = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: 700;
`;

export const Label = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-weight: 500;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

export const SelectIcon = styled.div`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  display: flex;
  align-items: center;
  font-size: 24px;
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const Select = styled(Input).attrs({ as: "select" })`
  appearance: none;
  width: 100%;
  padding-right: 40px;
`;

export const Divider = styled.div`
  width: 10px;
  text-align: center;
  color: ${({ theme }) => theme.colors.grey};
`;

export const Timer = styled.span`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.red};
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.red};
  font-size: 14px;
  margin-top: 4px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  padding: 10px;
`;
