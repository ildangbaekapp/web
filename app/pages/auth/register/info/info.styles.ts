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
`;

export const TopContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: 24px;
  font-weight: 500;
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 16px;
  font-weight: 500;
`;

export const Form = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
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

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.red};
  font-size: 16px;
  font-weight: 500;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  padding: 10px;
`;
