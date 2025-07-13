import styled from "styled-components";

import { StyledInput } from "~/components/Input/Input.styles";

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

export const StyledSelect = styled(StyledInput).attrs({ as: "select" })`
  appearance: none;
  width: 100%;
  padding-right: 40px;
`;

export const SelectIcon = styled.div`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  display: flex;
  align-items: center;
  font-size: 24px;
`;
