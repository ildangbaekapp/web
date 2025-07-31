import styled from "styled-components";

import Button from "~/components/ui/Button";

export const PageContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const Content = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-bottom: 80px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background.normal};
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  }
`;

export const SecondaryButton = styled(Button)`
  color: ${({ theme }) => theme.colors.foreground.normal};
`;

export const NextButton = styled(Button)`
  color: ${({ theme }) => theme.colors.background.normal};
`;
