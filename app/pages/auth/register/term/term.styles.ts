import styled from "styled-components";

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

  & > *:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
    padding-bottom: 10px;
  }
`;
