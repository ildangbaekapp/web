import styled from "styled-components";

import Feedback from "~/components/ui/Feedback";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  justify-content: center;
  flex: 1;
`;

export const DayButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const DayButtonWrapper = styled(Feedback)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const DayButton = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.background.normal};
`;

export const NegotiableWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
