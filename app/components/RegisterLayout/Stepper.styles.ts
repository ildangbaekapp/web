import styled from "styled-components";

export const StepperContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.background.normal};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  overflow-y: auto;
  border-radius: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const StepsWrapper = styled.div`
  align-self: stretch;
  padding: 10px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
`;
