import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  align-self: stretch;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.foreground.normal};
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

export const Description = styled.h2`
  color: ${({ theme }) => theme.colors.secondary.normal};
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  padding: 0;
`;
