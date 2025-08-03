import * as S from "./Section.styles";

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export default function Section({ title, icon, children }: SectionProps) {
  return (
    <S.SectionContainer>
      <S.Header>
        <S.IconWrapper>{icon}</S.IconWrapper>
        <S.Title>{title}</S.Title>
      </S.Header>
      {children}
    </S.SectionContainer>
  );
}
