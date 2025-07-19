import * as S from "./Card.styles";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Card({ children, ...props }: CardProps) {
  return <S.Wrapper {...props}>{children}</S.Wrapper>;
}
