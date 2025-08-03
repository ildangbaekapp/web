import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  min-width: 120px;
  height: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
`;

export const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  align-self: stretch;
  color: ${({ theme }) => theme.colors.secondary.dark};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 14px;
  font-weight: 700;
`;

export const Content = styled.div`
  color: ${({ theme }) => theme.colors.secondary.normal};
  font-family: ${({ theme }) => theme.fontFamily};
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  align-self: stretch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 5px;
  box-sizing: border-box;
`;
