import { styled } from "styled-components";

import Button from "~/components/Button";

export const AppBar = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 0 max(15px, 10vw);
  gap: 20px;
  background: ${({ theme }) => theme.colors.background.normal}80;
  backdrop-filter: blur(2px);
  z-index: 1000;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 15px;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1 1 0;
  max-width: 600px;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const SearchBox = styled(Button).attrs({
  colorScheme: "background",
  transitionVariant: "none",
})`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  overflow: hidden;
  flex: 1 1 0;
  min-width: 50px;
  align-items: center;
  padding: 10px 20px;
  height: auto;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.background.dark};
`;

export const SearchBoxText = styled.span`
  color: ${({ theme }) => theme.colors.foreground.light};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 18px;
  font-weight: 500;
  word-wrap: break-word;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ShortcutWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 30px;
  padding: 5px 10px;
  background: ${({ theme }) => theme.colors.secondary.normal};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const ShortcutText = styled.div`
  color: ${({ theme }) => theme.colors.background.normal};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 12px;
`;

export const Right = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
`;
