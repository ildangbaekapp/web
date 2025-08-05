import { useCallback, useState } from "react";
import { MdAdd, MdSend } from "react-icons/md";
import { useTheme } from "styled-components";

import Button from "~/components/ui/Button";
import usePalette from "~/hooks/usePalette";

import { resumes } from "./ResumeApplyView.constants";
import * as S from "./ResumeApplyView.styles";

export default function ResumeApplyView() {
  const theme = useTheme();

  const [selectedPalette, normalPalette] = usePalette([
    "primaryBackground",
    "background",
  ]);
  const [selectedResume, setSelectedResume] = useState<string>();

  const isSelected = useCallback(
    (resumeId: string) => selectedResume === resumeId,
    [selectedResume]
  );

  return (
    <S.Wrapper>
      <S.ResumeContainer>
        {resumes.map((resume) => (
          <S.ResumeWrapper
            key={resume.id}
            palette={isSelected(resume.id) ? selectedPalette : normalPalette}
            $selected={isSelected(resume.id)}
          >
            <S.ResumeContent onClick={() => setSelectedResume(resume.id)}>
              <S.ResumeInfo>
                <S.ResumeTitle $selected={isSelected(resume.id)}>
                  {resume.name}
                </S.ResumeTitle>
                <S.ResumeLastUpdated>{resume.lastUpdated}</S.ResumeLastUpdated>
              </S.ResumeInfo>
            </S.ResumeContent>
          </S.ResumeWrapper>
        ))}
      </S.ResumeContainer>

      <S.ButtonContainer>
        <Button
          icon={<MdAdd />}
          palette={normalPalette}
          color={theme.colors.secondary.normal}
        >
          이력서 작성
        </Button>
        <Button icon={<MdSend />} disabled={selectedResume === undefined}>
          지원하기
        </Button>
      </S.ButtonContainer>
    </S.Wrapper>
  );
}
