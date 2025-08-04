import type { Details } from "job";
import React, { useMemo } from "react";
import { MdBookmark, MdBookmarkBorder } from "react-icons/md";

import JobDetailPreview from "~/components/common/JobDetailPreview";
import usePalette from "~/hooks/usePalette";
import getJobDetailValueText from "~/utils/getJobDetailValueText";

import * as S from "./DetailJobCard.styles";

interface DetailJobCardProps {
  thumbnail: string;
  companyName: string;
  jobTitle: string;
  isBookmarked?: boolean;
  onClick?: () => void;
  onBookmarkClick?: () => void;
  details: Details;
}

export default function DetailJobCard({
  thumbnail,
  companyName,
  jobTitle,
  isBookmarked = false,
  onClick,
  details,
}: DetailJobCardProps) {
  const palette = usePalette("background");

  const detailKeys = useMemo(
    () => Object.keys(details) as (keyof Details)[],
    [details]
  );

  return (
    <S.JobCardWrapper palette={palette}>
      <S.JobCard onClick={onClick}>
        <S.Top>
          <S.Thumbnail>
            <img src={thumbnail} alt={`${companyName} logo`} />
          </S.Thumbnail>
          <S.Info>
            <S.CompanyName>{companyName}</S.CompanyName>
            <S.JobTitle>{jobTitle}</S.JobTitle>
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
              <JobDetailPreview detailKey={key}>
                {getJobDetailValueText(key, details[key])}
              </JobDetailPreview>
              {index < detailKeys.length - 1 && <S.Divider />}
            </React.Fragment>
          ))}
        </S.DetailContainer>
      </S.JobCard>
    </S.JobCardWrapper>
  );
}
