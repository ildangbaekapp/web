import * as S from "./RegisterStepTop.styles";

interface RegisterStepTopProps {
  title: string;
  description: string;
}

export default function RegisterStepTop({
  title,
  description,
}: RegisterStepTopProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Container>
  );
}
