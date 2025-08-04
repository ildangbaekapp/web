import styled from "styled-components";

export const Wrapper = styled.div<{ $direction: "row" | "column" }>`
  display: flex;
  min-width: ${({ $direction }) =>
    $direction === "column" ? "120px" : "200px"};
  height: ${({ $direction }) => ($direction === "column" ? "60px" : "unset")};
  flex-direction: ${({ $direction }) => $direction};
  justify-content: ${({ $direction }) =>
    $direction === "column" ? "center" : "flex-start"};
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
