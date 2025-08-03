import styled from "styled-components";

import Feedback from "~/components/ui/Feedback";

export const ButtonFeedback = styled(Feedback)`
  border-radius: 12px;
  overflow: hidden;
`;

export const Button = styled.button<{ $color: string; $hasIcon: boolean }>`
  padding: ${({ $hasIcon }) => ($hasIcon ? "12.5px 20px" : "15px 20px")};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: none;
  background: transparent;
  font-size: 16px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ $color }) => $color};
  cursor: inherit;
  white-space: nowrap;
`;

export const IconWrapper = styled.span<{ $color: string }>`
  width: 24px;
  height: 24px;
  min-width: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $color }) => $color};

  > svg {
    width: 100%;
    height: 100%;
  }
`;
