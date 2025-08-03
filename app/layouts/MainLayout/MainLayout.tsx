import { Outlet } from "react-router";

import { useModalStore } from "~/store/modalStore";

import AppBar from "./AppBar";
import * as S from "./MainLayout.styles";
import SearchModal from "./SearchModal";

export default function MainLayout() {
  const setModalState = useModalStore((state) => state.setModalState);

  return (
    <S.Layout>
      <AppBar onSearchBoxClick={() => setModalState("search")} />

      <S.Content>
        <Outlet />
      </S.Content>

      <SearchModal />
    </S.Layout>
  );
}
