import useRangeSlider from "./hooks/useRangeSlider";
import * as S from "./RangeSlider.styles";
import type { RangeSliderProps } from "./RangeSlider.types";

export default function RangeSlider({
  markers = [],
  toString = (value) => value.toLocaleString(),
  disabled = false,
  ...props
}: RangeSliderProps) {
  const {
    start,
    end,
    visualStart,
    visualEnd,
    slider1,
    slider2,
    startLabelRef,
    endLabelRef,
    startLabelWidth,
    endLabelWidth,
    handleSliderChange,
    getLabelStyle,
    getLeftStyle,
    getVisualValue,
  } = useRangeSlider(props);

  return (
    <S.Container>
      <S.Label
        style={getLabelStyle(visualStart, startLabelWidth)}
        ref={startLabelRef}
      >
        {toString(start)}
      </S.Label>
      <S.Label
        style={getLabelStyle(visualEnd, endLabelWidth)}
        ref={endLabelRef}
      >
        {toString(end)}
      </S.Label>

      <S.Slider
        min={0}
        max={100}
        step={0.1}
        value={visualStart}
        onInput={handleSliderChange}
        ref={slider1}
        disabled={disabled}
      />
      <S.Slider
        min={0}
        max={100}
        step={0.1}
        value={visualEnd}
        onInput={handleSliderChange}
        ref={slider2}
        disabled={disabled}
      />

      <S.SliderBackground />
      <S.SliderForeground
        $left={`${visualStart}%`}
        $width={`${visualEnd - visualStart}%`}
      />

      {markers.map((value) => (
        <S.Marker
          style={{
            left: getLeftStyle(getVisualValue(value)),
          }}
          key={value}
        >
          <S.MarkerLine />
          <S.MarkerText>{toString(value)}</S.MarkerText>
        </S.Marker>
      ))}
    </S.Container>
  );
}
