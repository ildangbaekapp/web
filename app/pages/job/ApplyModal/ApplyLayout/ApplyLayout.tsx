import { AnimatePresence } from "motion/react";
import { useCallback, useState } from "react";

import type { ApplyType } from "../ApplyModal.types";

import ApplyContentView from "./ApplyContentView";
import { APPLY_TYPES, iconMapping, variants } from "./ApplyLayout.constants";
import * as S from "./ApplyLayout.styles";

interface ApplyLayoutProps {
  applyType: ApplyType;
  setApplyType: (type: ApplyType) => void;
  onClose: () => void;
}

export default function ApplyLayout({
  applyType,
  setApplyType,
}: ApplyLayoutProps) {
  const [direction, setDirection] = useState(0);

  const getIndex = useCallback(
    (targetType: ApplyType) =>
      APPLY_TYPES.findIndex(({ type }) => targetType === type),
    []
  );

  const handleTypeChange = (type: ApplyType) => {
    const newIndex = getIndex(type);
    const oldIndex = getIndex(applyType);
    setDirection(newIndex > oldIndex ? 1 : -1);
    setApplyType(type);
  };

  return (
    <S.Wrapper>
      {/* 지원 방법 버튼 */}
      <S.TypeButtonContainer>
        {APPLY_TYPES.map(({ type, label }) => (
          <S.TypeButton
            key={type}
            isSelected={applyType === type}
            onClick={() => handleTypeChange(type)}
            icon={iconMapping[type]}
            label={label}
          />
        ))}
      </S.TypeButtonContainer>

      {/* 콘텐츠 */}
      <AnimatePresence custom={direction} mode="popLayout" initial={false}>
        <S.Content
          key={applyType}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "spring", duration: 0.5 }}
        >
          <ApplyContentView applyType={applyType} />
        </S.Content>
      </AnimatePresence>
    </S.Wrapper>
  );
}
