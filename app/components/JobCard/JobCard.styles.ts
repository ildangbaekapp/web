import styled from "styled-components";

import IconButton from "~/components/IconButton";

export const Wrapper = styled.div`
  min-width: 150px;
  width: 30vw;
  max-width: 200px;
  min-height: 200px;
  height: 40vw;
  max-height: 250px;
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.background.normal};
  font-family: ${({ theme }) => theme.fontFamily};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  }
`;

export const Top = styled.div<{ $backgroundImage?: string; $short?: boolean }>`
  align-self: stretch;
  flex: 1;
  padding: 15px;
  position: relative;
  box-sizing: border-box;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(${({ $backgroundImage }) =>
      $backgroundImage || "https://placehold.co/200"});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 5px;
`;

export const TagContainer = styled.div`
  display: inline-flex;
  gap: 5px;
  justify-content: flex-start;
  align-items: center;
`;

export const Tag = styled.div`
  padding: 5px 10px;
  background: ${({ theme }) => theme.colors.primary.normal};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.background.normal};
  font-size: 14px;
  font-weight: 500;
`;

export const Title = styled.div`
  align-self: stretch;
  color: ${({ theme }) => theme.colors.background.normal};
  font-size: max(14px, min(20px, 3vw));
  font-weight: 700;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Bookmark = styled(IconButton)`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.background.normal};
`;

export const Feature = styled.div`
  align-self: stretch;
  height: 30px;
  padding: 0 10px;
  background: ${({ theme }) => theme.colors.red.normal};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => theme.colors.background.normal};
  font-size: 12px;
  font-weight: 500;
  overflow: hidden;

  & > svg {
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.colors.background.light};
  }
`;

export const Bottom = styled.div`
  align-self: stretch;
  padding: 10px;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

export const PictureWrapper = styled.div`
  padding-right: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const CompanyLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  object-fit: cover;
`;

export const Info = styled.div`
  flex: 1 1 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  overflow: hidden;
`;

export const CompanyName = styled.div`
  color: ${({ theme }) => theme.colors.foreground.light};
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

export const Salary = styled.div`
  color: ${({ theme }) => theme.colors.red.normal};
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;
