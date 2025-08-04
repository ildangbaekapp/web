import styled from "styled-components";

import OptionButton from "~/components/common/OptionButton";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.normal};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: min(800px, 90vw);
`;

export const TypeButtonContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  padding: 20px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const TypeButton = styled(OptionButton).attrs({
  size: "min(20vw, 100px)",
  fontSize: "min(max(12px, 2.5vw), 16px)",
})``;

export const Content = styled.div`
  align-self: stretch;
  height: 64px;
`;
