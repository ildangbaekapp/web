import styled from "styled-components";

import Feedback from "~/components/ui/Feedback";

export const JobCardWrapper = styled(Feedback).attrs({
  transitionVariant: "none",
})`
  align-self: stretch;
  background: ${({ theme }) => theme.colors.background.normal};
  overflow: hidden;
`;

export const JobCard = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
`;

export const Top = styled.div`
  align-self: stretch;
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  display: inline-flex;
`;

export const Thumbnail = styled.div`
  width: 80px;
  height: 80px;
  background: ${({ theme }) => theme.colors.background.dark};
  border-radius: 16px;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Info = styled.div`
  flex: 1 1 0;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
  display: inline-flex;
`;

export const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary.normal};
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CompanyName = styled.div`
  align-self: stretch;
  color: ${({ theme }) => theme.colors.foreground.light};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  word-wrap: break-word;
`;

export const JobTitle = styled.div`
  color: ${({ theme }) => theme.colors.foreground.normal};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 700;
  word-wrap: break-word;
`;

export const Salary = styled.div`
  color: ${({ theme }) => theme.colors.red.normal};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 700;
  word-wrap: break-word;
`;

export const DetailContainer = styled.div`
  align-self: stretch;
  padding: 10px;
  box-sizing: border-box;
  gap: 10px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  justify-content: flex-start;
`;
