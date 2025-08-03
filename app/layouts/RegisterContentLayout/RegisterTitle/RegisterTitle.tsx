import * as S from "./RegisterTitle.styles";

interface RegisterTitleProps {
  title: string;
  description: string;
}

export default function RegisterTitle({
  title,
  description,
}: RegisterTitleProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Container>
  );
}
