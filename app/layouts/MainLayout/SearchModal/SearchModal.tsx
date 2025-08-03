import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "styled-components";

import Modal from "~/components/ui/Modal";
import { useModalStore } from "~/store/modalStore";

import FilterModalView from "./FilterModalView";
import * as S from "./SearchModal.styles";
import SearchModalView from "./SearchModalView";

export default function SearchModal() {
  const theme = useTheme();
  const { modalState, setModalState } = useModalStore();

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
              <FilterModalView onBack={() => setModalState("search")} />
            )}
          </motion.div>
        </AnimatePresence>
      </S.ModalContent>
    </Modal>
  );
}
