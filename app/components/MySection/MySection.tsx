import { FaUserCircle } from "react-icons/fa";
import {
  MdBookmark,
  MdManageAccounts,
  MdNotifications,
  MdSend,
  MdWork,
} from "react-icons/md";

import * as S from "./MySection.styles";

interface MySectionProps {
  name: string;
}

export default function MySection({ name }: MySectionProps) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Button>
          <S.ProfileIcon>
            <FaUserCircle />
          </S.ProfileIcon>
          <S.UserName>{name}님</S.UserName>
        </S.Button>
        <S.Divider />
        <S.Button>
          <S.ManageAccountsIcon>
            <MdManageAccounts />
          </S.ManageAccountsIcon>
          <S.MyPageText>마이페이지</S.MyPageText>
        </S.Button>
      </S.Header>
      <S.StatusContainer>
        <S.Status>
          <S.Title>
            <S.NotificationsIcon>
              <MdNotifications />
            </S.NotificationsIcon>
            <S.NewNotificationText>새 알림</S.NewNotificationText>
          </S.Title>
          <S.NotificationCount>2건</S.NotificationCount>
        </S.Status>
      </S.StatusContainer>
      <S.ButtonContainer>
        <S.ActionButton>
          <S.WorkIcon>
            <MdWork />
          </S.WorkIcon>
          <S.ResumeText>이력서</S.ResumeText>
        </S.ActionButton>
        <S.VerticalDivider />
        <S.ActionButton>
          <S.SendIcon>
            <MdSend />
            <S.Badge>
              <S.BadgeText>2</S.BadgeText>
            </S.Badge>
          </S.SendIcon>
          <S.JobApplicationText>지원 공고</S.JobApplicationText>
        </S.ActionButton>
        <S.VerticalDivider />
        <S.ActionButton>
          <S.BookmarkIcon>
            <MdBookmark />
          </S.BookmarkIcon>
          <S.BookmarkText>북마크</S.BookmarkText>
        </S.ActionButton>
      </S.ButtonContainer>
    </S.Wrapper>
  );
}
