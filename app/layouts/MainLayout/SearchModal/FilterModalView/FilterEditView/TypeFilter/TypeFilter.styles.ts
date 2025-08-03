import styled from "styled-components";

import Feedback from "~/components/ui/Feedback";

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

export const TypeButtonWrapper = styled(Feedback)<{ $isSelected: boolean }>`
  width: 100%;
  height: 100%;
  border-radius: 24px;
  border: 1px solid
    ${({ theme, $isSelected }) =>
      $isSelected
        ? theme.colors.primary.normal
        : theme.colors.background.light};
`;

export const TypeButton = styled.a`
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const Circle = styled.div<{ $isSelected: boolean }>`
  width: 100px;
  height: 100px;
  background: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.primary.normal : theme.colors.background.light};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: ${({ theme, $isSelected }) =>
    $isSelected
      ? theme.colors.background.normal
      : theme.colors.foreground.light};
  transition: all 0.2s ease-in-out;
`;

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
`;

export const Label = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
