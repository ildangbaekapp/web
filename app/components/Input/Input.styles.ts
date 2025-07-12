import styled from "styled-components";

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
`;

export const StyledInput = styled.input`
  flex-grow: 1;
  flex-shrink: 0;
  min-width: 0;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }
`;
