import styled from "styled-components";

import Button from "~/components/Button";
import Card from "~/components/Card";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    145deg,
    white 0%,
    ${({ theme }) => theme.colors.primaryBackground.normal} 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0;
  }
`;

export const LoginBox = styled(Card)`
  width: 100%;
  max-width: 500px;
  min-height: 700px;
  padding: 80px 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 100%;
    height: 100%;
    padding: 80px 10vw;
    border-radius: 0;
    box-shadow: none;
  }
`;

export const TopSection = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

export const InputFields = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AuthButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const LoginButton = styled(Button)`
  width: 100%;
  color: ${({ theme }) => theme.colors.background.normal};
`;

export const AuthLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const AuthLink = styled.a`
  color: ${({ theme }) => theme.colors.secondary.dark};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 14px;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
`;

export const Divider = styled.div`
  width: 1px;
  height: 12px;
  background-color: ${({ theme }) => theme.colors.secondary.normal};
`;

export const BottomSection = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const SnsLoginText = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary.normal};
  gap: 10px;
`;

export const SnsLoginDivider = styled.div`
  flex: 1 1 0;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.secondary.normal};
`;

export const SnsLoginLabel = styled.div`
  color: ${({ theme }) => theme.colors.secondary.normal};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 12px;
  font-weight: 500;
`;

export const SnsButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;
