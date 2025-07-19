import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;

export const Body = styled.div`
  display: flex;
  width: 100%;
  min-height: 400px;
`;

export const MenuContainer = styled.div`
  width: 270px;
  padding: 20px 15px 20px 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-right: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;

export const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
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
