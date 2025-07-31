import { motion } from "motion/react";
import styled from "styled-components";

import Button from "~/components/Button";
import FilterPreview from "~/components/FilterPreview/FilterPreview";

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

export const Filter = styled(Button).attrs({
  colorScheme: "background",
})`
  display: flex;
  padding: 15px;
  height: auto;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  margin: 20px 0;
  border-radius: 24px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  height: 60px;
`;

export const NoFilter = styled.span`
  margin: 0 20px;
  color: ${({ theme }) => theme.colors.foreground.light};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-weight: 500;
`;

export const StyledFilterPreview = styled(motion.create(FilterPreview))`
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.foreground.dark}1a;
  transition: background-color 0.3s ease;
`;

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.foreground.light};
`;
