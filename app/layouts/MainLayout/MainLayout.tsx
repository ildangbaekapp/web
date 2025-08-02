import { motion, AnimatePresence } from "framer-motion";
import { Outlet } from "react-router";
import { useTheme } from "styled-components";

import Modal from "~/components/Modal";
import { useModalStore } from "~/store/modalStore";

import AppBar from "./AppBar/AppBar";
import FilterModalView from "./FilterModalView";
import * as S from "./MainLayout.styles";
import SearchModalView from "./SerachModalView";

export default function MainLayout() {
  const theme = useTheme();
  const { modalState, setModalState } = useModalStore();

  return (
    <S.Layout>
      <AppBar onSearchBoxClick={() => setModalState("search")} />

      <S.Content>
        <Outlet />
      </S.Content>

      {/* 검색 및 필터 모달 */}
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
    </S.Layout>
  );
}
