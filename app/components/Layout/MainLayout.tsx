import { Outlet } from "react-router";

import AppBar from "~/components/AppBar";

import * as S from "./MainLayout.styles";

export default function MainLayout() {
  return (
    <S.Layout>
      <AppBar />
      <S.Content>
        <Outlet />
      </S.Content>
    </S.Layout>
  );
}
