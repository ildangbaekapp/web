import type { Details } from "job";
import React, { useMemo, useState } from "react";
import { MdBookmark, MdBookmarkBorder } from "react-icons/md";

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
  onBookmarkClick?: () => void;
  details: Details;
}

export default function DetailJobCard({
  thumbnail,
  companyName,
  jobTitle,
  isBookmarked = false,
  onBookmarkClick,
  details,
}: DetailJobCardProps) {
  const palette = usePalette("background");

  const [bookmarked, setBookmarked] = useState(isBookmarked);
  const filterKeys = useMemo(
    () => Object.keys(details) as (keyof Details)[],
    [details]
  );

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 카드 클릭 이벤트 전파 방지
    setBookmarked(!bookmarked);
    onBookmarkClick?.();
  };

  return (
    <S.Wrapper>
      <S.Top>
        <S.Thumbnail>
          <img src={thumbnail} alt={`${companyName} logo`} />
        </S.Thumbnail>
        <S.Info>
          <S.CompanyName>{companyName}</S.CompanyName>
          <S.JobTitle>{jobTitle}</S.JobTitle>
        </S.Info>
        <IconButton onClick={handleBookmarkClick} palette={palette}>
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
        {filterKeys.map((key, index) => (
          <React.Fragment key={`${key}-${index}`}>
            <JobDetailPreview detailKey={key}>
              {getJobDetailValueText(key, details[key])}
            </JobDetailPreview>
            {index < filterKeys.length - 1 && <S.Divider />}
          </React.Fragment>
        ))}
      </S.DetailContainer>
    </S.Wrapper>
  );
}
