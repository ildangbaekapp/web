import Step from "./Step";
import * as S from "./Stepper.styles";

interface StepperProps {
  steps: string[];
  activeStep: number;
}

export default function Stepper({ steps, activeStep }: StepperProps) {
  return (
    <S.StepperContainer>
      <S.StepsWrapper>
        {steps.map((label, index) => (
          <Step
            key={index}
            number={index + 1}
            label={label}
            isActive={index + 1 === activeStep}
          />
        ))}
      </S.StepsWrapper>
    </S.StepperContainer>
  );
}
