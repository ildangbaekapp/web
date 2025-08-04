import { useState } from "react";

import Modal from "~/components/ui/Modal";

import ApplyModalView from "./ApplyLayout";
import * as S from "./ApplyModal.styles";
import type { ApplyType } from "./ApplyModal.types";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplyModal({ isOpen, onClose }: ApplyModalProps) {
  const [applyType, setApplyType] = useState<ApplyType>("phone");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.ModalContent layout transition={{ type: "spring", duration: 0.5 }}>
        <ApplyModalView
          applyType={applyType}
          setApplyType={setApplyType}
          onClose={onClose}
        />
      </S.ModalContent>
    </Modal>
  );
}
