import styled from "styled-components";

import Button from "~/components/Button";

export const Wrapper = styled.div`
  min-width: min(500px, 90vw);
  width: 100%;
  height: 100%;
  border-radius: 28px;
  padding: 20px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.background.normal};
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  display: inline-flex;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const ContentWrapper = styled.div`
  align-self: stretch;
  padding-top: 10px;
  padding-bottom: 10px;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: flex;
`;

export const Title = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.foreground.dark};
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  word-wrap: break-word;
`;

export const Description = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.foreground.normal};
  font-size: 16px;
  font-weight: 500;
  line-height: 22.4px;
  word-wrap: break-word;
  white-space: pre-wrap;
`;

export const ConfirmButton = styled(Button).attrs({
  colorScheme: "primary",
})`
  align-self: stretch;
  height: 48px;
  padding: 15px 20px;
  border-radius: 28px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.background.normal};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  word-wrap: break-word;
`;
