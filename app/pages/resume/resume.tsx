import type { Filters, Resume } from "@types";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { MdChevronRight, MdDelete, MdSave } from "react-icons/md";

import Button from "~/components/ui/Button";
import usePalette from "~/hooks/usePalette";
import getFilterValueText from "~/utils/getFilterValueText";
import getJobDetailLabel from "~/utils/getJobDetailLabel";

import FilterEditModal from "./FilterEditModal";
import { mockResume } from "./resume.constants";
import * as S from "./resume.styles";

export default function ResumePage() {
  const [palette, redPalette] = usePalette(["background", "red"]);

  const [resume, setResume] = useState<Resume>(mockResume);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalFilterKey, setModalFilterKey] = useState<keyof Filters>("type");

  const isResumeModified = useMemo(() => {
    return JSON.stringify(resume) !== JSON.stringify(mockResume);
  }, [resume]);

  const detailKeys = useMemo(
    () => Object.keys(resume.filters) as (keyof Filters)[],
    [resume.filters]
  );

  const handleDetailItemClick = (detailKey: keyof Filters) => {
    setModalFilterKey(detailKey);
    setModalOpen(true);
  };

  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setResume((prev) => ({
      ...prev,
      body: e.target.value,
    }));
  };

  return (
    <S.Container>
      <S.Content>
        <S.Overview>
          <S.Text>
            <S.Title>{resume.name}</S.Title>
            <S.LastUpdated>최종 수정일: {resume.lastUpdated}</S.LastUpdated>
          </S.Text>

          <S.ButtonContainer>
            {/* 삭제 버튼 */}
            <AnimatePresence initial={false} mode="popLayout">
              <motion.div layout key="delete">
                <Button icon={<MdDelete />} palette={redPalette}>
                  삭제
                </Button>
              </motion.div>

              {/* 저장 버튼 */}
              {isResumeModified && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  layout
                  key="save"
                >
                  <Button icon={<MdSave />}>저장</Button>
                </motion.div>
              )}
            </AnimatePresence>
          </S.ButtonContainer>
        </S.Overview>

        <S.DetailContainer>
          {detailKeys.map((detailKey) => (
            <S.DetailWrapper key={detailKey}>
              <S.DetailLabel>{getJobDetailLabel(detailKey)}</S.DetailLabel>
              <S.DetailItemWrapper palette={palette}>
                <S.DetailItem onClick={() => handleDetailItemClick(detailKey)}>
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

        {resume.body && (
          <S.BodyInput
            as="textarea"
            value={resume.body}
            onChange={handleBodyChange}
          />
        )}
      </S.Content>

      {/* 저장 플로팅 버튼 */}
      <S.FloatingButtonContainer>
        <AnimatePresence initial={false}>
          {isResumeModified && (
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
            >
              <Button icon={<MdSave />}>저장</Button>
            </motion.div>
          )}
        </AnimatePresence>
      </S.FloatingButtonContainer>

      {/* 필터 수정 모달 */}
      <FilterEditModal
        originalFilter={mockResume.filters}
        filter={resume.filters}
        setFilter={(updatedFilters) =>
          setResume((prev) => ({
            ...prev,
            filters: { ...prev.filters, ...updatedFilters },
          }))
        }
        selectedFilter={modalFilterKey}
        setSelectedFilter={setModalFilterKey}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </S.Container>
  );
}
