import styled from "styled-components";

import Feedback from "~/components/ui/Feedback";

export const ButtonFeedback = styled(Feedback)`
  border-radius: 50%;
  overflow: hidden;
`;

export const Button = styled.button<{ $color: string }>`
  width: 100%;
  height: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: none;
  background: transparent;
  color: ${({ $color }) => $color};
  cursor: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
`;
