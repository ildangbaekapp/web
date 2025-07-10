import styled from "styled-components";

export const StepperContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  overflow: hidden;
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
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
`;
