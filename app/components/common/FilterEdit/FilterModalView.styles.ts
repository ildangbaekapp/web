import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: min(800px, 90vw);
  font-family: ${({ theme }) => theme.fontFamily};
  padding: 10px;
  box-sizing: border-box;
`;

export const Header = styled.div<{ $hasButton: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px ${({ $hasButton }) => ($hasButton ? "10px" : "20px")};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.foreground.light};
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.colors.foreground.light};
  font-size: 20px;
  font-weight: 500;
  margin: 0;
`;

export const Body = styled.div`
  display: flex;
  width: 100%;
  height: 500px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

export const MenuContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 10px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-width: 300px;
    max-width: 300px;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    border-right: 1px solid ${({ theme }) => theme.colors.background.light};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 70px;
    flex-direction: row;
    overflow-x: auto;
    gap: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.background.light};
  }
`;

export const ContentContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: calc(100% - 300px);
    padding: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: calc(100% - 70px);
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin-top: auto;
  padding: 10px;

  & > button {
    border-radius: 5px;
  }
`;
