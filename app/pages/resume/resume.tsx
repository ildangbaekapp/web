import type { Filters, Resume } from "@types";
import { MdChevronRight, MdDelete } from "react-icons/md";

import Button from "~/components/ui/Button";
import usePalette from "~/hooks/usePalette";
import getFilterValueText from "~/utils/getFilterValueText";
import getJobDetailLabel from "~/utils/getJobDetailLabel";

import { mockResume } from "./resume.constants";
import * as S from "./resume.styles";

export default function ResumePage() {
  const [palette, redPalette] = usePalette(["background", "red"]);
  const resume: Resume = mockResume;

  const detailKeys: (keyof Filters)[] = [
    "type",
    "career",
    "weekday",
    "salary",
    "time",
    "recruitLocation",
    "duration",
    "workLocation",
  ];

  return (
    <S.Container>
      <S.Content>
        <S.Overview>
          <S.Text>
            <S.Title>{resume.name}</S.Title>
            <S.LastUpdated>최종 수정일: {resume.lastUpdated}</S.LastUpdated>
          </S.Text>

          <S.ButtonContainer>
            <Button icon={<MdDelete />} palette={redPalette}>
              삭제
            </Button>
          </S.ButtonContainer>
        </S.Overview>

        <S.DetailContainer>
          {detailKeys.map((detailKey) => (
            <S.DetailWrapper key={detailKey}>
              <S.DetailLabel>{getJobDetailLabel(detailKey)}</S.DetailLabel>
              <S.DetailItemWrapper palette={palette}>
                <S.DetailItem>
                  <S.DetailValue>
                    {getFilterValueText(detailKey, resume.filters[detailKey])}
                  </S.DetailValue>
                  <S.IconWrapper>
                    <MdChevronRight size={24} />
                  </S.IconWrapper>
                </S.DetailItem>
              </S.DetailItemWrapper>
            </S.DetailWrapper>
          ))}
        </S.DetailContainer>

        {resume.body && <S.BodyInput as="textarea" value={resume.body} />}
      </S.Content>
    </S.Container>
  );
}
