import type { Details } from "job";
import React, { useMemo, useState } from "react";
import { MdBookmark, MdBookmarkBorder } from "react-icons/md";
import { useTheme } from "styled-components";

import JobDetailPreview from "~/components/common/JobDetailPreview";
import IconButton from "~/components/ui/IconButton";
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
  onBookmarkClick,
  details,
}: DetailJobCardProps) {
  const theme = useTheme();
  const palette = usePalette("background");

  const [bookmarked, setBookmarked] = useState(isBookmarked);
  const detailKeys = useMemo(
    () => Object.keys(details) as (keyof Details)[],
    [details]
  );

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 카드 클릭 이벤트 전파 방지
    setBookmarked(!bookmarked);
    onBookmarkClick?.();
  };

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
          <IconButton
            onClick={handleBookmarkClick}
            palette={{
              normal: `${theme.colors.background.light}00`,
              hover: `${theme.colors.background.light}33`,
              tap: `${theme.colors.background.light}66`,
              focus: `${theme.colors.background.light}66`,
            }}
          >
            <S.IconWrapper>
              {bookmarked ? (
                <MdBookmark size={24} />
              ) : (
                <MdBookmarkBorder size={24} />
              )}
            </S.IconWrapper>
          </IconButton>
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
