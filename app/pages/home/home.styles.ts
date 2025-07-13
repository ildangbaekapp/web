import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 80px 10vw 100px 10vw;
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 80px 10px 100px 10px;
  }
`;

export const FilterWrapper = styled.div`
  align-self: stretch;
  padding: 20px 10px;
  overflow: hidden;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: flex;
`;

export const Filter = styled.div`
  overflow: hidden;
  justify-content: center;
  align-items: center;
  gap: 5px;
  display: inline-flex;
`;

export const FilterText = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  word-wrap: break-word;
`;

export const ArrowDropDownIcon = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  overflow: hidden;
  & > svg {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const SectionContainer = styled.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
`;

export const RowSection = styled.div`
  align-self: stretch;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

export const Section = styled.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
`;

export const Ad = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  background: ${({ theme }) => theme.colors.grey};
  overflow: hidden;
  border-radius: 10px;
`;

export const Count = styled.div`
  padding: 5px 10px;
  right: 15px;
  bottom: 15px;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  border-radius: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-flex;
`;

export const CountText = styled.div`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  word-wrap: break-word;
`;

export const MySection = styled.div`
  align-self: stretch;
  min-width: 300px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
`;

export const Header = styled.div`
  align-self: stretch;
  padding-top: 10px;
  padding-bottom: 10px;
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  display: inline-flex;
`;

export const JobContainer = styled.div`
  display: flex;
  overflow-x: auto;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  gap: 10px;
`;

export const Button = styled.div`
  overflow: hidden;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: flex;
`;

export const ProfileIcon = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.lightGrey};
  & > svg {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const UserName = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 700;
  word-wrap: break-word;
`;

export const Divider = styled.div`
  width: 2px;
  height: 2px;
  background: ${({ theme }) => theme.colors.darkGrey};
  border-radius: 9999px;
`;

export const ManageAccountsIcon = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  overflow: hidden;
  & > svg {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const MyPageText = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 700;
  word-wrap: break-word;
`;

export const StatusContainer = styled.div`
  align-self: stretch;
  padding: 15px;
  background: ${({ theme }) => theme.colors.lightGrey};
  overflow: hidden;
  border-radius: 15px;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
`;

export const Status = styled.div`
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  display: flex;
`;

export const Title = styled.div`
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  display: flex;
`;

export const NotificationsIcon = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  overflow: hidden;
  & > svg {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const NewNotificationText = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  word-wrap: break-word;
`;

export const NotificationCount = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 700;
  word-wrap: break-word;
`;

export const ButtonContainer = styled.div`
  align-self: stretch;
  padding: 5px 0;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  display: inline-flex;
`;

export const ActionButton = styled.div`
  flex: 1 1 0;
  padding-top: 10px;
  padding-bottom: 10px;
  overflow: hidden;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
`;

export const WorkIcon = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
  overflow: hidden;
  & > svg {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ResumeText = styled.div`
  color: ${({ theme }) => theme.colors.primary};
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

export const SendIcon = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
  overflow: hidden;
  & > svg {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.primary};
  }
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

export const JobApplicationText = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  word-wrap: break-word;
`;

export const BookmarkIcon = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
  overflow: hidden;
  & > svg {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const BookmarkText = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;
  word-wrap: break-word;
`;

export const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  overflow: hidden;
  & > svg {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const RealtimeJobContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  padding: 10px;
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: inline-flex;
`;
