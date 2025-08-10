import type { Filters } from "@types";

import FilterEdit from "~/components/common/FilterEdit";
import Modal from "~/components/ui/Modal";

import * as S from "./SearchModal.styles";

interface FilterEditModalProps {
  originalFilter: Filters;
  filter: Filters;
  setFilter: (filter: Partial<Filters>) => void;
  selectedFilter: keyof Filters;
  setSelectedFilter: React.Dispatch<React.SetStateAction<keyof Filters>>;
  open: boolean;
  onClose: () => void;
}

export default function FilterEditModal({
  originalFilter,
  filter,
  setFilter,
  selectedFilter,
  setSelectedFilter,
  open,
  onClose,
}: FilterEditModalProps) {
  return (
    <Modal isOpen={open} onClose={onClose}>
      <S.ModalContent>
        <FilterEdit
          title="이력서 조건"
          originalFilter={originalFilter}
          filter={filter}
          setFilter={setFilter}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          onApply={onClose}
        />
      </S.ModalContent>
    </Modal>
  );
}
