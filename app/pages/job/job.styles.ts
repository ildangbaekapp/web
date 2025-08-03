import { styled } from "styled-components";

import JobDetailPreview from "~/components/common/JobDetailPreview";
import Card from "~/components/ui/Card";

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 10vw 100px 10vw;
  position: relative;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  display: inline-flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 0 100px 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 100%;
  padding-bottom: 100px;
`;

export const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: calc(100% - 20px);
    margin: 0 10px;
  }
`;

export const OverviewLeft = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  overflow: hidden;
`;

export const Thumbnail = styled.div<{ $src: string }>`
  width: 100px;
  height: 100px;
  background-image: url(${({ $src }) => $src});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow: hidden;
`;

export const Company = styled.div`
  color: ${({ theme }) => theme.colors.secondary.normal};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 20px;
  font-weight: 500;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.foreground.normal};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 24px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Salary = styled.div`
  color: ${({ theme }) => theme.colors.red.normal};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-weight: 500;
`;

export const OverviewRight = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const DetailContainer = styled(Card)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: calc(100% - 20px);
    margin: 0 10px;
  }
`;

export const Detail = styled(JobDetailPreview)`
  flex: 1 0 0;
`;

export const Description = styled(Card)`
  width: 100%;
  padding: 20px;
  color: ${({ theme }) => theme.colors.secondary.dark};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  white-space: pre-wrap;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: calc(100% - 20px);
    margin: 0 10px;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 626px;
  height: auto;
  border-radius: 10px;
`;

export const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 10vw;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.background.normal};
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 20px;
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const FooterTitle = styled.div`
  color: ${({ theme }) => theme.colors.foreground.normal};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: max(14px, min(4vw, 20px));
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const FooterSalary = styled.div`
  color: ${({ theme }) => theme.colors.red.normal};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: max(10.5px, min(3vw, 15px));
  font-weight: 500;
`;

export const FooterRight = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
