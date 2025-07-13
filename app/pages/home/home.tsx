import { FaUserCircle } from "react-icons/fa"; // For profile icon
import {
  MdArrowDropDown,
  MdManageAccounts,
  MdNotifications,
  MdWork,
  MdSend,
  MdBookmark,
  MdRecommend,
  MdAutorenew,
} from "react-icons/md";

import JobCard from "~/components/JobCard";

import * as S from "./home.styles";

export default function Home() {
  return (
    <S.MainContainer>
      <S.FilterWrapper>
        <S.Filter>
          <S.FilterText>상하차</S.FilterText>
          <S.ArrowDropDownIcon>
            <MdArrowDropDown />
          </S.ArrowDropDownIcon>
        </S.Filter>
      </S.FilterWrapper>
      <S.SectionContainer>
        <S.RowSection>
          <S.Ad>
            <S.Count>
              <S.CountText>1 / 7</S.CountText>
            </S.Count>
          </S.Ad>
          <S.MySection>
            <S.Header>
              <S.Button>
                <S.ProfileIcon>
                  <FaUserCircle />
                </S.ProfileIcon>
                <S.UserName>홍길동님</S.UserName>
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
          </S.MySection>
        </S.RowSection>
        <S.Section>
          <S.Header>
            <S.IconWrapper>
              <MdRecommend />
            </S.IconWrapper>
            <S.MyPageText>추천 공고</S.MyPageText>
          </S.Header>
          <S.JobContainer>
            {/* Job 1 */}
            <JobCard
              companyName="CJ대한통운"
              jobTitle="상하차 인력 구합니다 !!!"
              salary="일 120,000원"
              timeAgo="3일 전"
              location="서구 대곡동"
              category="상하차"
            />
            {/* Job 2 */}
            <JobCard
              companyName="CJ대한통운"
              jobTitle="상하차 인력 구합니다 !!!"
              salary="일 120,000원"
              timeAgo="3일 전"
              location="서구 대곡동"
              category="상하차"
            />
            {/* Job 3 */}
            <JobCard
              companyName="CJ대한통운"
              jobTitle="상하차 인력 구합니다 !!!"
              salary="일 120,000원"
              timeAgo="3일 전"
              location="서구 대곡동"
              category="상하차"
            />
          </S.JobContainer>
        </S.Section>
        <S.Section>
          <S.Header>
            <S.IconWrapper>
              <MdAutorenew />
            </S.IconWrapper>
            <S.MyPageText>실시간 공고</S.MyPageText>
          </S.Header>
          <S.RealtimeJobContainer>
            {/* Realtime Job 1 */}
            <JobCard
              companyName="CJ대한통운"
              jobTitle="상하차 인력 구합니다 !!!"
              salary=""
              timeAgo=""
              location=""
              category="상하차"
              isRealtime={true}
              isBookmarked={true}
            />
            {/* Realtime Job 2 */}
            <JobCard
              companyName="CJ대한통운"
              jobTitle="상하차 인력 구합니다 !!!"
              salary=""
              timeAgo=""
              location=""
              category="상하차"
              isRealtime={true}
              isBookmarked={true}
            />
            {/* Realtime Job 3 */}
            <JobCard
              companyName="CJ대한통운"
              jobTitle="상하차 인력 구합니다 !!!"
              salary=""
              timeAgo=""
              location=""
              category="상하차"
              isRealtime={true}
              isBookmarked={true}
            />
            {/* Realtime Job 4 */}
            <JobCard
              companyName="CJ대한통운"
              jobTitle="상하차 인력 구해요"
              salary=""
              timeAgo=""
              location=""
              category="상하차"
              isRealtime={true}
              isBookmarked={false}
            />
            {/* Realtime Job 5 */}
            <JobCard
              companyName="CJ대한통운"
              jobTitle="상하차 인력 구해요"
              salary=""
              timeAgo=""
              location=""
              category="상하차"
              isRealtime={true}
              isBookmarked={false}
            />
            {/* Realtime Job 6 */}
            <JobCard
              companyName="CJ대한통운"
              jobTitle="상하차 인력 구합니다 !!!"
              salary=""
              timeAgo=""
              location=""
              category="상하차"
              isRealtime={true}
              isBookmarked={true}
            />
          </S.RealtimeJobContainer>
        </S.Section>
      </S.SectionContainer>
    </S.MainContainer>
  );
}
