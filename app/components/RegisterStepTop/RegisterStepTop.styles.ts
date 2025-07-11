import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  align-self: stretch;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: 24px;
  font-weight: 700;
  line-height: 33.6px;
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 16px;
  font-weight: 500;
  line-height: 22.4px;
`;
