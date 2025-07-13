import styled from "styled-components";
import Button from "~/components/Button";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    145deg,
    white 0%,
    ${({ theme }) => theme.colors.primaryBg} 100%
  );
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-y: auto;
`;

export const LoginBox = styled.div`
  width: 100%;
  max-width: 500px;
  height: 80%;
  min-height: 700px;
  padding: 80px 40px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 100%;
    padding: 80px 10vw;
    width: 100%;
    height: 100%;
    border-radius: 0;
    box-shadow: none;
  }
`;

export const TopSection = styled.div`
  align-self: stretch;
  overflow: hidden;
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
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;

export const InputWrapper = styled.div`
  align-self: stretch;
  padding: 15px;
  overflow: hidden;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
`;

export const InputLabel = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 400;
  word-wrap: break-word;
`;

export const AuthButtons = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const LoginButton = styled(Button)`
  width: 100%;
`;

export const AuthLinks = styled.div`
  overflow: hidden;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const AuthLink = styled.a`
  text-align: center;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  text-decoration: underline;
  word-wrap: break-word;
  cursor: pointer;
`;

export const Divider = styled.div`
  width: 10px;
  height: 0px;
  transform: rotate(90deg);
  transform-origin: top left;
  outline: 1px solid ${({ theme }) => theme.colors.grey};
  outline-offset: -0.5px;
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
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const SnsLoginDivider = styled.div`
  flex: 1 1 0;
  height: 0px;
  outline: 1px solid ${({ theme }) => theme.colors.lightGrey};
  outline-offset: -0.5px;
`;

export const SnsLoginLabel = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  line-height: 16.8px;
  word-wrap: break-word;
`;

export const SnsButtons = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const SnsButton = styled.div<{ $background: string }>`
  width: 56px;
  height: 56px;
  background: ${({ $background }) => $background};
  border-radius: 31.5px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 24.27px;
    height: 24.27px;
  }
`;
