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

export const TermsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const AllAgreeContainer = styled.div`
  align-self: stretch;
  padding: 15px;
  background: ${({ theme }) => theme.colors.primaryBg};
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

export const TermsList = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Divider = styled.div`
  align-self: stretch;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.grey};
  margin: 0 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  padding: 10px;
`;
