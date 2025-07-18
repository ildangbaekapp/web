import styled from "styled-components";

export const TermItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 10px;
`;

export const TermContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TermTitle = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
`;

export const RequiredChip = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: 700;
`;

export const OptionalChip = styled.span`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 14px;
  font-weight: 700;
`;

export const TermLabel = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 18px;
  font-weight: 600;
`;
