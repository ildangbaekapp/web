import styled from "styled-components";

import Feedback from "~/components/ui/Feedback";

export const Wrapper = styled.div`
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

export const NumberWrapper = styled.div`
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  background: ${({ theme }) => theme.colors.background.light};
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Left = styled.div`
  gap: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.colors.foreground.normal};
`;

export const PhoneNumber = styled.span`
  text-align: center;
  color: ${({ theme }) => theme.colors.foreground.normal};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;

  word-wrap: break-word;
`;

export const CopyButtonWrapper = styled(Feedback)`
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.background.normal};
`;

export const CopyButton = styled.a`
  padding: 7px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 14px;
  font-weight: 500;
`;
