import { AnimatePresence, motion } from "framer-motion";
import { MdCall, MdSend, MdSms } from "react-icons/md";

import type { ApplyType } from "../ApplyModal.types";

import ApplyContentView from "./ApplyContentView";
import { APPLY_TYPES } from "./ApplyLayout.constants";
import * as S from "./ApplyLayout.styles";

const iconMapping = {
  phone: <MdCall />,
  sms: <MdSms />,
  resume: <MdSend />,
};

interface ApplyLayoutProps {
  applyType: ApplyType;
  setApplyType: (type: ApplyType) => void;
  onClose: () => void;
}

export default function ApplyLayout({
  applyType,
  setApplyType,
  onClose,
}: ApplyLayoutProps) {
  return (
    <S.Wrapper>
      {/* 지원 방법 버튼 */}
      <S.TypeButtonContainer>
        {APPLY_TYPES.map(({ type, label }) => (
          <S.TypeButton
            key={type}
            isSelected={applyType === type}
            onClick={() => setApplyType(type)}
            icon={iconMapping[type]}
            label={label}
          />
        ))}
      </S.TypeButtonContainer>

      {/* 콘텐츠 */}
      <AnimatePresence mode="popLayout" initial={false}>
        <S.Content
          key={applyType}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ApplyContentView applyType={applyType} />
        </S.Content>
      </AnimatePresence>
    </S.Wrapper>
  );
}
