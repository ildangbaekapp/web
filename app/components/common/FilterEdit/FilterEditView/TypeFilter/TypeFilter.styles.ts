import styled from "styled-components";

import OptionButton from "~/components/common/OptionButton";

export const Wrapper = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  padding: 30px;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const TypeButton = styled(OptionButton)`
  width: 100%;
  height: 100%;
`;
