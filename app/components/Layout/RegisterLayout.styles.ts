import styled from "styled-components";

export const Layout = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow-y: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0;
  }
`;

export const StepperWrapper = styled.div`
  position: sticky;
  top: 0;
  flex-shrink: 0;
  width: 300px;
  height: 100%;
  left: calc(50vw - 300px - min(300px, 50vw) - 20px);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const Content = styled.main`
  flex-grow: 1;
  max-width: 600px;
  height: 100%;
  box-sizing: border-box;
`;
