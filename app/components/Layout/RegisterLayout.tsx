import { Outlet, useLocation } from "react-router";

import Stepper from "../Stepper";

import * as S from "./RegisterLayout.styles";

const steps = [
  "이용 약관 동의",
  "사용 목적 선택",
  "휴대폰 인증",
  "회원 정보 입력",
];

const pathToStep: { [key: string]: number } = {
  term: 1,
  role: 2,
  verify: 3,
  info: 4,
};

export default function RegisterLayout() {
  const location = useLocation();
  const activeStep =
    pathToStep[location.pathname.split("/").at(-1) ?? "term"] ?? 1;

  return (
    <S.Layout>
      <S.StepperWrapper>
        <Stepper steps={steps} activeStep={activeStep} />
      </S.StepperWrapper>
      <S.Content>
        <Outlet />
      </S.Content>
    </S.Layout>
  );
}
