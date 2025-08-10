import type { Details } from "@types";
import React, { useMemo } from "react";
import { MdBookmark, MdBookmarkBorder } from "react-icons/md";

import JobDetailPreview from "~/components/common/JobDetailPreview";
import usePalette from "~/hooks/usePalette";
import getJobDetailValueText, {
  getSalaryTypeText,
} from "~/utils/getJobDetailValueText";
import getKoreanNumber from "~/utils/getKoreanNumber";

import * as S from "./DetailJobCard.styles";

interface DetailJobCardProps {
  thumbnail: string;
  companyName: string;
  jobTitle: string;
  isBookmarked?: boolean;
  onClick?: () => void;
  onBookmarkClick?: () => void;
  details: Details;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}

export default function DetailJobCard({
  thumbnail,
  companyName,
  jobTitle,
  isBookmarked = false,
  onClick,
  details,
  className,
  ref,
}: DetailJobCardProps) {
  const palette = usePalette("background");

  const detailKeys = useMemo(
    () => Object.keys(details) as (keyof Details)[],
    [details]
  );

  return (
    <S.JobCardWrapper palette={palette} className={className} ref={ref}>
      <S.JobCard onClick={onClick}>
        <S.Top>
          <S.Thumbnail>
            <img src={thumbnail} alt={`${companyName} logo`} />
          </S.Thumbnail>
          <S.Info>
            <S.CompanyName>{companyName}</S.CompanyName>
            <S.JobTitle>{jobTitle}</S.JobTitle>
            <S.Salary>{`${getSalaryTypeText(
              details.salary.type
            )} ${getKoreanNumber(details.salary.salary)}원`}</S.Salary>
          </S.Info>
          <S.IconWrapper>
            {isBookmarked ? (
              <MdBookmark size={24} />
            ) : (
              <MdBookmarkBorder size={24} />
            )}
          </S.IconWrapper>
        </S.Top>

        <S.DetailContainer>
          {detailKeys.map((key, index) => (
            <React.Fragment key={`${key}-${index}`}>
              <JobDetailPreview detailKey={key} direction="row">
                {getJobDetailValueText(key, details[key])}
              </JobDetailPreview>
            </React.Fragment>
          ))}
        </S.DetailContainer>
      </S.JobCard>
    </S.JobCardWrapper>
  );
}
