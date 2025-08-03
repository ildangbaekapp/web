import * as S from "./Step.styles";

export interface StepProps {
  number: number;
  label: string;
  isActive: boolean;
}

export default function Step({ number, label, isActive }: StepProps) {
  return (
    <S.StepItem $isActive={isActive}>
      <S.StepNumber $isActive={isActive}>{number}</S.StepNumber>
      <S.StepLabel>{label}</S.StepLabel>
    </S.StepItem>
  );
}
