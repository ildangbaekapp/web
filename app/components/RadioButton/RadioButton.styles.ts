import styled from "styled-components";

export const RadioButtonContainer = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

export const Circle = styled.div<{
  $checked: boolean;
}>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid
    ${({ theme, $checked }) =>
      $checked ? theme.colors.primary : theme.colors.grey};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border-color 0.2s;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const InnerCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
`;
