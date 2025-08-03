import { Outlet, useLocation } from "react-router";

import { pathToStep, steps } from "./RegisterLayout.constants";
import * as S from "./RegisterLayout.styles";
import Stepper from "./Stepper";

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
