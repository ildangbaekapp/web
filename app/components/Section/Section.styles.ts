import styled from "styled-components";

export const SectionContainer = styled.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
`;

export const Header = styled.div`
  align-self: stretch;
  padding-top: 10px;
  padding-bottom: 10px;
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  display: inline-flex;
`;

export const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  overflow: hidden;
  & > svg {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.foreground.dark};
  }
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.foreground.dark};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 700;
  word-wrap: break-word;
`;
