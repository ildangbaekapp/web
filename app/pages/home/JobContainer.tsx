import JobCard from "~/components/JobCard";

import * as S from "./JobContainer.styles";

export default function JobContainer() {
  return (
    <S.JobContainer>
      <JobCard
        companyName={"쿠팡이츠"}
        jobTitle={"인천 서구 배달 기사 모집합니다."}
        salary={"협의"}
        category={"배달"}
        isBookmarked
      />
      <JobCard
        companyName={"삼성전자"}
        jobTitle={"물류센터 상하차"}
        salary={"시급 10,000원"}
        category={"물류"}
        feature={"내 주변 일자리"}
      />
      <JobCard
        companyName={"개인"}
        jobTitle={"가정집 청소부 모집합니다."}
        salary={"월급 2,500,000원"}
        category={"통합"}
      />
      <JobCard
        companyName={"쿠팡이츠"}
        jobTitle={"인천 서구 배달 기사 모집합니다."}
        salary={"협의"}
        category={"배달"}
        isBookmarked
      />
      <JobCard
        companyName={"삼성전자"}
        jobTitle={"물류센터 상하차"}
        salary={"시급 10,000원"}
        category={"물류"}
        feature={"내 주변 일자리"}
      />
      <JobCard
        companyName={"개인"}
        jobTitle={"가정집 청소부 모집합니다."}
        salary={"월급 2,500,000원"}
        category={"통합"}
      />
      <JobCard
        companyName={"쿠팡이츠"}
        jobTitle={"인천 서구 배달 기사 모집합니다."}
        salary={"협의"}
        category={"배달"}
        isBookmarked
      />
      <JobCard
        companyName={"삼성전자"}
        jobTitle={"물류센터 상하차"}
        salary={"시급 10,000원"}
        category={"물류"}
        feature={"내 주변 일자리"}
      />
      <JobCard
        companyName={"개인"}
        jobTitle={"가정집 청소부 모집합니다."}
        salary={"월급 2,500,000원"}
        category={"통합"}
      />
    </S.JobContainer>
  );
}
