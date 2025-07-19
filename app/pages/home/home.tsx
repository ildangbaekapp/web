import { MdArrowDropDown } from "react-icons/md";

import MySection from "~/components/MySection";

import * as S from "./home.styles";
import JobContainer from "./JobContainer";

export default function Home() {
  return (
    <S.MainContainer>
      <S.FilterWrapper>
        <S.Filter>
          <S.FilterText>상하차</S.FilterText>
          <S.ArrowDropDownIcon>
            <MdArrowDropDown />
          </S.ArrowDropDownIcon>
        </S.Filter>
      </S.FilterWrapper>
      <S.SectionContainer>
        <S.RowSection>
          <S.Ad>
            <S.Count>
              <S.CountText>1 / 7</S.CountText>
            </S.Count>
          </S.Ad>
          <MySection name={"홍길동"} />
        </S.RowSection>
        <JobContainer />
      </S.SectionContainer>
    </S.MainContainer>
  );
}
