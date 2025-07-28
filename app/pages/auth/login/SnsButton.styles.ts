import styled from "styled-components";

import Button from "~/components/Button";

export const SnsButton = styled(Button)`
  width: 56px;
  height: 56px;
  border-radius: 31.5px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 24.27px;
    height: 24.27px;
  }
`;
