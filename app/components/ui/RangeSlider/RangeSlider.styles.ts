import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 70px;
`;

export const Slider = styled.input.attrs({ type: "range" })`
  margin: 0;
  position: absolute;
  top: 50%;
  width: 100%;
  height: 4px;
  -webkit-appearance: none;
  appearance: none;
  background: none;
  pointer-events: none;
  z-index: 1;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 6px;
    height: 20px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.primary.normal};
    background-size: cover;
    border: none;
    cursor: pointer;
    pointer-events: auto;
  }

  &:disabled {
    &::-webkit-slider-thumb {
      background: ${({ theme }) => theme.colors.secondary.normal};
      cursor: not-allowed;
    }
  }
`;

export const SliderBackground = styled.div`
  background: ${({ theme }) => theme.colors.background.dark};
  width: 100%;
  height: 4px;
  position: absolute;
  top: 50%;
`;

export const SliderForeground = styled.div.attrs<{
  $left: string;
  $width: string;
}>((props) => ({
  style: {
    left: props.$left,
    width: props.$width,
  },
}))`
  background: ${({ theme }) => theme.colors.foreground.light};
  height: 4px;
  position: absolute;
  top: 50%;
`;

export const Label = styled.div`
  position: absolute;
  top: 50%;
  color: ${({ theme }) => theme.colors.foreground.light};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
`;

export const Marker = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, 4px);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: -2;
`;

export const MarkerLine = styled.div`
  width: 1px;
  height: 12px;
  background: ${({ theme }) => theme.colors.background.dark};
`;

export const MarkerText = styled.span`
  color: ${({ theme }) => theme.colors.secondary.light};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 12px;
  font-weight: 400;
`;
