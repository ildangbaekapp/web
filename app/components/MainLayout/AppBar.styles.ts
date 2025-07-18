import { motion } from "motion/react";
import { styled } from "styled-components";

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
  padding: 0 10vw;
  gap: 20px;
  background: ${({ theme }) => theme.colors.white}80;
  backdrop-filter: blur(2px);
  z-index: 1000;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 10px;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const SearchBox = styled(motion.button)`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  overflow: hidden;
  align-items: center;
  flex: 1 1 0;
  padding: 10px 20px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const SearchBoxText = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 18px;
  font-weight: 500;
  word-wrap: break-word;
  white-space: nowrap;
`;

export const ShortcutWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 30px;
  padding: 5px 10px;
  background: ${({ theme }) => theme.colors.lightGrey};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const ShortcutText = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 12px;
`;

export const Right = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
`;
