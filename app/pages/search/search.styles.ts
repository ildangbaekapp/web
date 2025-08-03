import { motion } from "motion/react";
import styled from "styled-components";

import JobDetailPreview from "~/components/common/JobDetailPreview/JobDetailPreview";
import Feedback from "~/components/ui/Feedback";

export const MainContainer = styled.div`
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

export const FilterSummaryWrapper = styled(Feedback).attrs({
  transitionVariant: "none",
})`
  width: 100%;
  margin: 20px 0;
  border-radius: 24px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: calc(100% - 20px);
    margin: 20px 10px;
  }
`;

export const FilterSummary = styled.a`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  border-radius: 24px;
`;

export const NoFilter = styled.span`
  margin: 0 20px;
  color: ${({ theme }) => theme.colors.foreground.light};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-weight: 500;
`;

export const FilterPreview = styled(motion.create(JobDetailPreview))`
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.foreground.dark}1a;
  transition: background-color 0.3s ease;
`;

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.foreground.light};
`;

export const JobContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 10px;
    box-sizing: border-box;
  }
`;
