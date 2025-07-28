import styled from "styled-components";

import Button from "~/components/Button";
import Card from "~/components/Card";

export const Wrapper = styled(Card)`
  align-self: stretch;
  min-width: 350px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.background.normal};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const Header = styled.div`
  align-self: stretch;
  padding: 10px;
  background: ${({ theme }) => theme.colors.background.light};
  overflow: hidden;
  border-radius: 24px;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
`;

export const HeaderButton = styled.div`
  overflow: hidden;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: flex;
`;

export const Profile = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 20px;
`;

export const Welcome = styled.div`
  color: ${({ theme }) => theme.colors.foreground.normal};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  word-wrap: break-word;
`;

export const ChevronRight = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.foreground.normal};
`;

export const ButtonContainer = styled.div`
  align-self: stretch;
  flex: 1 1 0;
  padding: 5px 10px;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  display: inline-flex;
`;

export const ActionButton = styled(Button).attrs({
  colorScheme: "background",
})`
  flex: 1 1 0;
  overflow: hidden;
  box-sizing: border-box;
  height: 80px;
  border-radius: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => theme.colors.primary.normal};
  cursor: pointer;
`;

export const ActionButtonIcon = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
  overflow: hidden;

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

export const ActionButtonText = styled.div`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  word-wrap: break-word;
`;

export const VerticalDivider = styled.div`
  width: 1px;
  height: 30px;
  background: ${({ theme }) => theme.colors.secondary.light};
`;

export const Badge = styled.div`
  width: 18px;
  height: 18px;
  left: 14px;
  top: 14px;
  position: absolute;
  background: ${({ theme }) => theme.colors.primaryBackground.normal};
  overflow: hidden;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-flex;
`;

export const BadgeText = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary.normal};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 700;
  word-wrap: break-word;
`;
