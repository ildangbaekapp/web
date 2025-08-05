import styled from "styled-components";

import Feedback from "~/components/ui/Feedback";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export const ResumeContainer = styled.div`
  display: flex;
  max-height: 200px;
  padding: 5px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`;

export const ResumeWrapper = styled(Feedback)<{ $selected: boolean }>`
  width: 100%;
  border-radius: 24px;
  border: 1px solid
    ${({ $selected, theme }) =>
      $selected ? theme.colors.primary.normal : theme.colors.secondary.normal};
`;

export const ResumeContent = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
`;

export const ResumeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ResumeTitle = styled.div<{ $selected: boolean }>`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 700;
  font-size: 16px;
  color: ${({ theme, $selected }) =>
    $selected ? theme.colors.primary.normal : theme.colors.secondary.normal};
`;

export const ResumeLastUpdated = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.secondary.light};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;
