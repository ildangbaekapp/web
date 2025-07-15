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
`;

export const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  overflow: hidden;
  align-items: center;
  flex: 1 1 0;
  padding: 10px 20px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 30px;
  outline: 1px solid ${({ theme }) => theme.colors.lightGrey};
  cursor: pointer;
`;

export const SearchBoxText = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 18px;
  font-weight: 500;
  word-wrap: break-word;
  white-space: nowrap;
`;

export const Right = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
