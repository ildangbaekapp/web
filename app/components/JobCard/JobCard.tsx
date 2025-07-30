import { useState } from "react";
import {
  MdOutlineBookmark,
  MdOutlineBookmarkBorder,
  MdStars,
} from "react-icons/md";

import * as S from "./JobCard.styles";

interface JobCardProps {
  thumbnail?: string;
  companyPicture?: string;
  companyName: string;
  jobTitle: string;
  salary: string;
  category: string;
  feature?: string;
  isBookmarked?: boolean;
  onBookmarkClick?: () => void;
}

export default function JobCard({
  thumbnail,
  companyPicture,
  companyName,
  jobTitle,
  salary,
  category,
  feature,
  isBookmarked = false,
  onBookmarkClick,
}: JobCardProps) {
  const [bookmarked, setBookmarked] = useState(isBookmarked);

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 카드 클릭 이벤트 전파 방지
    setBookmarked(!bookmarked);
    onBookmarkClick?.();
  };

  return (
    <S.Wrapper>
      <S.StyledButton>
        <S.Top $backgroundImage={thumbnail} $short={feature !== undefined}>
          <S.TagContainer>
            <S.Tag>{category}</S.Tag>
          </S.TagContainer>
          <S.Title>{jobTitle}</S.Title>
        </S.Top>
        {feature && (
          <S.Feature>
            <MdStars />
            <div>{feature}</div>
          </S.Feature>
        )}
        <S.Bottom>
          <S.PictureWrapper>
            <S.CompanyLogo
              src={companyPicture || "https://placehold.co/40x40"}
              alt={`${companyName} logo`}
            />
          </S.PictureWrapper>
          <S.Info>
            <S.CompanyName>{companyName}</S.CompanyName>
            <S.Salary>{salary}</S.Salary>
          </S.Info>
        </S.Bottom>
      </S.StyledButton>
      <S.Bookmark
        onClick={handleBookmarkClick}
        size={30}
        icon={
          bookmarked ? (
            <MdOutlineBookmark size={24} />
          ) : (
            <MdOutlineBookmarkBorder size={24} />
          )
        }
      />
    </S.Wrapper>
  );
}
