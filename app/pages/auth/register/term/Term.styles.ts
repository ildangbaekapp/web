import styled from "styled-components";

export const AllAgreeContainer = styled.div`
  align-self: stretch;
  padding: 10px;
  background: ${({ theme }) => theme.colors.primaryBackground.normal};
  border-radius: 16px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

export const TermsList = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary.normal};
  }
`;
