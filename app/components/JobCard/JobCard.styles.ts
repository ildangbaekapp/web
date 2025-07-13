import styled from "styled-components";

export const Job = styled.div`
  height: 140px;
  padding: 15px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  gap: 15px;
  display: flex;
  flex-shrink: 0;
`;

export const Thumbnail = styled.div`
  width: 110px;
  height: 110px;
  position: relative;
  background: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 10px;
`;

export const Info = styled.div`
  width: 220px;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: inline-flex;
`;

export const Top = styled.div`
  align-self: stretch;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
  display: flex;
`;

export const CompanyText = styled.div`
  align-self: stretch;
  color: ${({ theme }) => theme.colors.grey};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  word-wrap: break-word;
`;

export const JobTitle = styled.div`
  align-self: stretch;
  color: ${({ theme }) => theme.colors.black};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 700;
  word-wrap: break-word;
`;

export const Detail = styled.div`
  align-self: stretch;
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  display: inline-flex;
`;

export const SalaryText = styled.div`
  color: ${({ theme }) => theme.colors.red};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  word-wrap: break-word;
`;

export const SmallDivider = styled.div`
  width: 2px;
  height: 2px;
  background: ${({ theme }) => theme.colors.grey};
  border-radius: 9999px;
`;

export const TimeAgoText = styled.div`
  text-align: right;
  color: ${({ theme }) => theme.colors.grey};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  word-wrap: break-word;
`;

export const TagContainer = styled.div`
  align-self: stretch;
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  display: inline-flex;
`;

export const Tag = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  background: ${({ theme }) => theme.colors.darkGrey};
  overflow: hidden;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  display: flex;
`;

export const LocationOnIcon = styled.div`
  width: 16px;
  height: 16px;
  position: relative;
  overflow: hidden;
  & > svg {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const LocationText = styled.div`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  word-wrap: break-word;
`;

export const CategoryIcon = styled.div`
  width: 16px;
  height: 16px;
  position: relative;
  overflow: hidden;
  & > svg {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const CategoryText = styled.div`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  word-wrap: break-word;
`;

export const RealtimeJob = styled.div`
  width: 150px;
  padding: 10px;
  overflow: hidden;
  border-radius: 10px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  display: inline-flex;
  flex-shrink: 0;
`;

export const RealtimeThumbnail = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  background: ${({ theme }) => theme.colors.lightGrey};
  overflow: hidden;
  border-radius: 10px;
`;

export const RealtimeTag = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  left: 81px;
  top: 113px;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  display: inline-flex;
`;

export const RealtimeTagText = styled.div`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  word-wrap: break-word;
`;

export const RealtimeBookmarkIcon = styled.div`
  width: 24px;
  height: 24px;
  left: 116px;
  top: 10px;
  position: absolute;
  overflow: hidden;
  & > svg {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const RealtimeInfo = styled.div`
  align-self: stretch;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
  display: flex;
`;

export const RealtimeCompanyText = styled.div`
  align-self: stretch;
  color: ${({ theme }) => theme.colors.grey};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  word-wrap: break-word;
`;

export const RealtimeJobTitle = styled.div`
  align-self: stretch;
  color: ${({ theme }) => theme.colors.black};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 600;
  word-wrap: break-word;
`;
