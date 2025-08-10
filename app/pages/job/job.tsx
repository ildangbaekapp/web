import type { DetailedJob, Details, WithBookmark } from "@types";
import { useMemo, useState } from "react";
import { MdBookmark, MdBookmarkBorder, MdSend } from "react-icons/md";

import Button from "~/components/ui/Button";
import IconButton from "~/components/ui/IconButton";
import usePalette from "~/hooks/usePalette";
import ApplyModal from "~/pages/job/ApplyModal";
import { useSearchStore } from "~/store/searchStore";
import theme from "~/styles/theme";
import getJobDetailValueText from "~/utils/getJobDetailValueText";
import jobSatisfiesFilters from "~/utils/jobSatisfiesFilters";

import FilterMatchBadge from "./FilterMatchBadge";
import { mockJob } from "./job.constants";
import * as S from "./job.styles";

export default function JobPage() {
  const palette = usePalette("background");

  const job: WithBookmark<DetailedJob> = mockJob;
  const filter = useSearchStore((state) => state.filter);

  const detailKeys = useMemo(
    () => Object.keys(job.details) as (keyof Details)[],
    [job.details]
  );

  const satisfiesFilters = useMemo(
    () => jobSatisfiesFilters(job.details, filter),
    [job.details, filter]
  );

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <S.Container>
      <S.Content>
        <S.Overview>
          {/* 공고 개요 */}
          <S.OverviewLeft>
            <S.Thumbnail $src={job.thumbnail} />
            <S.Text>
              <S.Company>{job.company}</S.Company>
              <S.Title>{job.title}</S.Title>
              <S.Salary>
                {getJobDetailValueText("salary", job.details.salary)}
              </S.Salary>
            </S.Text>
          </S.OverviewLeft>

          {/* 북마크 및 지원하기 버튼 */}
          <S.OverviewRight>
            <IconButton palette={palette} color={theme.colors.primary.normal}>
              {job.isBookmarked ? (
                <MdBookmark size={24} />
              ) : (
                <MdBookmarkBorder size={24} />
              )}
            </IconButton>
            <Button icon={<MdSend />} onClick={() => setModalOpen(true)}>
              지원하기
            </Button>
          </S.OverviewRight>
        </S.Overview>

        {/* 공고 조건 */}
        <S.DetailWithMatchWrapper>
          {/* 필터 일치 여부 */}
          <FilterMatchBadge isMatch={satisfiesFilters} />
          <S.Divider />
          <S.DetailContainer>
            {detailKeys.map((detailKey) => (
              <S.Detail key={detailKey} detailKey={detailKey}>
                {getJobDetailValueText(detailKey, job.details[detailKey])}
              </S.Detail>
            ))}
          </S.DetailContainer>
        </S.DetailWithMatchWrapper>

        {/* 공고 설명 */}
        {job.description !== undefined && (
          <S.Description>{job.description}</S.Description>
        )}

        {/* 공고 이미지 */}
        {job.images?.map((src) => (
          <S.Image key={src} src={src} />
        ))}
      </S.Content>

      <S.Footer>
        <S.FooterLeft>
          <S.FooterTitle>{job.title}</S.FooterTitle>
          <S.FooterSalary>
            {getJobDetailValueText("salary", job.details.salary)}
          </S.FooterSalary>
        </S.FooterLeft>
        <S.FooterRight>
          <IconButton palette={palette} color={theme.colors.primary.normal}>
            {job.isBookmarked ? (
              <MdBookmark size={24} />
            ) : (
              <MdBookmarkBorder size={24} />
            )}
          </IconButton>
          <IconButton
            palette={palette}
            color={theme.colors.primary.normal}
            onClick={() => setModalOpen(true)}
          >
            <MdSend size={24} />
          </IconButton>
        </S.FooterRight>
      </S.Footer>

      {/* 지원 모달 */}
      <ApplyModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </S.Container>
  );
}
