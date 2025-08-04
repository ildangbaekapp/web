import styled from "styled-components";

export const ModalContent = styled.div`
  width: 100%;
  border-radius: 32px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colors.background.normal};
  overflow: hidden;
`;
