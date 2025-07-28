import styled from "styled-components";

import Button from "~/components/Button";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  justify-content: center;
  flex: 1;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  padding: 20px 40px;
  box-sizing: border-box;
  position: relative;

  .rc-slider {
    position: relative;
    height: 14px;
    padding: 5px 0;
    width: 100%;
    border-radius: 6px;
    touch-action: none;
  }

  .rc-slider-rail {
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.secondary.normal};
    border-radius: 2px;
  }

  .rc-slider-track {
    position: absolute;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.foreground.light};
    border-radius: 2px;
  }

  .rc-slider-handle {
    position: absolute;
    width: 5px;
    height: 20px;
    margin-top: -8px;
    background-color: ${({ theme }) => theme.colors.secondary.normal};
    border: 2px solid ${({ theme }) => theme.colors.background.normal};
    cursor: grab;

    &:active {
      cursor: grabbing;
    }

    &:focus {
      outline: none;
    }
  }

  .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {
    border-color: ${({ theme }) => theme.colors.primary.normal};
    box-shadow: 0 0 0 5px rgba(0, 119, 182, 0.2);
  }
`;

export const HandleValue = styled.div`
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.foreground.light};
  color: white;
  padding: 2px 8px;
  border-radius: 5px;
  font-size: 12px;
  white-space: nowrap;
`;

export const TypeButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  flex-wrap: wrap;
`;

export const TypeButton = styled(Button)`
  padding: 10px 15px;
  height: auto;
  border-radius: 20px;
  border: none;
  color: ${({ theme }) => theme.colors.background.normal};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 500;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const IrrelevantWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
