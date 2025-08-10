import type { Filters } from "@types";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTheme } from "styled-components";

import FilterEdit from "~/components/common/FilterEdit";
import Modal from "~/components/ui/Modal";
import { useModalStore } from "~/store/modalStore";
import { initialFilter, useSearchStore } from "~/store/searchStore";

import * as S from "./SearchModal.styles";
import SearchModalView from "./SearchModalView";

export default function SearchModal() {
  const theme = useTheme();
  const { filter, setFilter } = useSearchStore();
  const { modalState, setModalState } = useModalStore();

  const [selectedFilter, setSelectedFilter] = useState<keyof Filters>("type");

  return (
    <Modal isOpen={modalState !== null} onClose={() => setModalState(null)}>
      <S.ModalContent
        layout
        animate={{
          background:
            modalState === "search"
              ? `${theme.colors.background.normal}cc`
              : theme.colors.background.normal,
          backdropFilter: modalState === "search" ? "blur(8px)" : "none",
        }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            layout
            key={modalState}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* 검색 모달 */}
            {modalState === "search" && (
              <SearchModalView
                onFilterClick={() => setModalState("filter")}
                onClose={() => setModalState(null)}
              />
            )}

            {/* 필터 모달 */}
            {modalState === "filter" && (
              <FilterEdit
                title="검색 필터"
                onBack={() => setModalState("search")}
                onApply={() => setModalState("search")}
                originalFilter={initialFilter}
                filter={filter}
                setFilter={setFilter}
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </S.ModalContent>
    </Modal>
  );
}
