import styled from "styled-components";

import Card from "~/components/Card";

export const Wrapper = styled(Card)`
  align-self: stretch;
  min-width: 350px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-flex;
`;

export const Header = styled.div`
  align-self: stretch;
  padding: 10px;
  background: ${({ theme }) => theme.colors.lightGrey};
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
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 700;
  word-wrap: break-word;
`;

export const ChevronRight = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const ButtonContainer = styled.div`
  align-self: stretch;
  flex: 1 1 0;
  padding-top: 5px;
  padding-bottom: 5px;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  display: inline-flex;
`;

export const ActionButton = styled.button`
  flex: 1 1 0;
  padding-top: 10px;
  padding-bottom: 10px;
  overflow: hidden;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  display: inline-flex;
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  border: none;
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
  background: ${({ theme }) => theme.colors.lightGrey};
`;

export const Badge = styled.div`
  width: 18px;
  height: 18px;
  left: 14px;
  top: 14px;
  position: absolute;
  background: ${({ theme }) => theme.colors.primaryBg};
  overflow: hidden;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-flex;
`;

export const BadgeText = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 700;
  word-wrap: break-word;
`;
