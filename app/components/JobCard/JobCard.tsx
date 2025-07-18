import { MdBookmark, MdCategory, MdLocationOn } from "react-icons/md";
import { useTheme } from "styled-components";

import IconButton from "~/components/IconButton";

import * as S from "./JobCard.styles";

interface JobCardProps {
  companyName: string;
  jobTitle: string;
  salary: string;
  timeAgo: string;
  location: string;
  category: string;
  isRealtime?: boolean;
  isBookmarked?: boolean;
}

export default function JobCard({
  companyName,
  jobTitle,
  salary,
  timeAgo,
  location,
  category,
  isRealtime = false,
  isBookmarked = false,
}: JobCardProps) {
  const theme = useTheme();

  if (isRealtime) {
    return (
      <S.RealtimeJob className="Job">
        <S.RealtimeThumbnail className="Thumbnail">
          <S.RealtimeTag className="Tag">
            <S.RealtimeTagText>{category}</S.RealtimeTagText>
          </S.RealtimeTag>
          <S.BookmarkIconButtonWrapper>
            <IconButton
              icon={<MdBookmark size={24} />}
              size={32}
              color={isBookmarked ? theme.colors.primary : theme.colors.grey}
            />
          </S.BookmarkIconButtonWrapper>
        </S.RealtimeThumbnail>
        <S.RealtimeInfo className="Info">
          <S.RealtimeCompanyText>{companyName}</S.RealtimeCompanyText>
          <S.RealtimeJobTitle>{jobTitle}</S.RealtimeJobTitle>
        </S.RealtimeInfo>
      </S.RealtimeJob>
    );
  }

  return (
    <S.Job className="Job">
      <S.Thumbnail className="Thumbnail" />
      <S.Info className="Info">
        <S.Top className="Top">
          <S.CompanyText>{companyName}</S.CompanyText>
          <S.JobTitle>{jobTitle}</S.JobTitle>
        </S.Top>
        <S.Detail className="Detail">
          <S.SalaryText>{salary}</S.SalaryText>
          <S.SmallDivider className="Divider" />
          <S.TimeAgoText>{timeAgo}</S.TimeAgoText>
        </S.Detail>
        <S.TagContainer className="TagContainer">
          <S.Tag className="Tag">
            <S.LocationOnIcon className="LocationOn">
              <MdLocationOn />
            </S.LocationOnIcon>
            <S.LocationText>{location}</S.LocationText>
          </S.Tag>
          <S.Tag className="Tag">
            <S.CategoryIcon className="Category">
              <MdCategory />
            </S.CategoryIcon>
            <S.CategoryText>{category}</S.CategoryText>
          </S.Tag>
        </S.TagContainer>
      </S.Info>
    </S.Job>
  );
}
