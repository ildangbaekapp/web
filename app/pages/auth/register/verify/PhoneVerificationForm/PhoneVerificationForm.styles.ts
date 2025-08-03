import styled from "styled-components";

import Button from "~/components/ui/Button";

export const StyledButton = styled(Button)`
  flex-shrink: 0;
  height: 100%;
  border-radius: 16px;
`;

export const Timer = styled.span`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.primary.normal};
  font-size: 16px;
`;
