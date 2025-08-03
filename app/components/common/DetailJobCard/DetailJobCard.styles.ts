import styled from "styled-components";

export const Wrapper = styled.div`
  align-self: stretch;
  padding-top: 20px;
  background: ${({ theme }) => theme.colors.background.normal};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  border-radius: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: inline-flex;
`;

export const Top = styled.div`
  align-self: stretch;
  padding-left: 20px;
  padding-right: 20px;
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

export const DetailContainer = styled.div`
  align-self: stretch;
  padding: 10px;
  box-sizing: border-box;
  overflow-x: auto;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  display: inline-flex;
  width: 100%;
`;

export const Divider = styled.div`
  flex-shrink: 0;
  width: 1px;
  height: 30px;
  background: ${({ theme }) => theme.colors.secondary.light};
`;
