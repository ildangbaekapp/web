import { MdArrowDropDown } from "react-icons/md";

import Ad from "./Ad";
import * as S from "./home.styles";
import JobContainer from "./JobContainer";
import MySection from "./MySection";

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
            <Ad />
          </S.Ad>
          <MySection name={"홍길동"} />
        </S.RowSection>
        <JobContainer />
      </S.SectionContainer>
    </S.MainContainer>
  );
}
