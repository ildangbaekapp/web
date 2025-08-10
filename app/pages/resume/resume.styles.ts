import { styled } from "styled-components";

import Feedback from "~/components/ui/Feedback";
import Input from "~/components/ui/Input";

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
    padding: 0 10px 100px 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 100%;
`;

export const FloatingButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  right: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow: hidden;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
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

export const LastUpdated = styled.div`
  color: ${({ theme }) => theme.colors.secondary.normal};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-weight: 500;
`;

export const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 20px 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
`;

export const DetailItemWrapper = styled(Feedback)`
  border-radius: 12px;
  align-self: stretch;
  border: ${({ theme }) => `1px solid ${theme.colors.background.dark}`};
`;

export const DetailItem = styled.a`
  display: flex;
  padding: 15px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const DetailLabel = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground.normal};
`;

export const DetailValue = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary.normal};
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.foreground.light};
`;

export const BodyInput = styled(Input)`
  width: 100%;
  min-height: 200px;
  padding: 20px;
  box-sizing: border-box;
  border: ${({ theme }) => `1px solid ${theme.colors.background.dark}`};
  background-color: ${({ theme }) => theme.colors.background.normal};
  border-radius: 12px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  line-height: 1.5;
  resize: vertical;
`;
