import { useState } from "react";
import { Outlet } from "react-router";

import Modal from "~/components/Modal";

import AppBar from "./AppBar";
import * as S from "./MainLayout.styles";
import SearchModalContent from "./SearchModalContent";

export default function MainLayout() {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <S.Layout>
      <AppBar onSearchBoxClick={() => setSearchModalOpen(true)} />
      <S.Content>
        <Outlet />
      </S.Content>

      <Modal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)}>
        <SearchModalContent />
      </Modal>
    </S.Layout>
  );
}
