import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.normal};
`;

export const Content = styled.main`
  padding-top: 80px;
`;
