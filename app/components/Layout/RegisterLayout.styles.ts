import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

export const StepperWrapper = styled.div`
  flex-shrink: 0;
  width: 300px;
  height: 100%;
`;

export const Content = styled.main`
  flex-grow: 1;
  max-width: 600px;
`;
