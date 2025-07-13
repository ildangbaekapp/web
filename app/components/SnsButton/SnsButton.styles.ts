import styled from "styled-components";

export const SnsButton = styled.div<{ $background: string }>`
  width: 56px;
  height: 56px;
  background: ${({ $background }) => $background};
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
