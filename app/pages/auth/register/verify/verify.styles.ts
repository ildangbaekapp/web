import styled from "styled-components";

import Button from "~/components/ui/Button";

export const Divider = styled.div`
  width: 10px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary.normal};
`;

export const Timer = styled.span`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.red.normal};
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.red.normal};
  font-size: 14px;
  margin-top: 4px;
`;

export const StyledButton = styled(Button)`
  height: 100%;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.background.normal};
`;
