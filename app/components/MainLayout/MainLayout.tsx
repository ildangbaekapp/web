import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Outlet } from "react-router";
import { useTheme } from "styled-components";

import Modal from "~/components/Modal";

import AppBar from "./AppBar";
import * as S from "./MainLayout.styles";
import FilterView from "./modals/FilterView";
import SearchView from "./modals/SearchView";

export default function MainLayout() {
  const theme = useTheme();

  const [modalState, setModalState] = useState<"search" | "filter" | null>(
    null
  );

  return (
    <S.Layout>
      <AppBar onSearchBoxClick={() => setModalState("search")} />
      <S.Content>
        <Outlet />
      </S.Content>

      <Modal isOpen={modalState !== null} onClose={() => setModalState(null)}>
        <S.ModalContent
          layout
          animate={{
            background:
              modalState === "search"
                ? `${theme.colors.white}cc`
                : theme.colors.white,
            backdropFilter: modalState === "search" ? "blur(8px)" : "none",
          }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              key={modalState}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {modalState === "search" && (
                <SearchView onFilterClick={() => setModalState("filter")} />
              )}
              {modalState === "filter" && (
                <FilterView onBack={() => setModalState("search")} />
              )}
            </motion.div>
          </AnimatePresence>
        </S.ModalContent>
      </Modal>
    </S.Layout>
  );
}
