import { MdArrowDropDown, MdAutorenew, MdRecommend } from "react-icons/md";

import JobCard from "~/components/JobCard";
import MySection from "~/components/MySection";
import Section from "~/components/Section";

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
          <MySection name={"홍길동"} />
        </S.RowSection>
        <Section title="추천 공고" icon={<MdRecommend />}>
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
        </Section>
        <Section title="실시간 공고" icon={<MdAutorenew />}>
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
        </Section>
      </S.SectionContainer>
    </S.MainContainer>
  );
}
