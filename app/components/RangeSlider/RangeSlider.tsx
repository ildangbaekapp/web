import React, { useState, useRef, useEffect } from "react";

import getScaler from "./getScaler";
import getUnscaler from "./getUnscaler";
import * as S from "./RangeSlider.styles";

import type { ScaleMethod } from ".";

interface RangeSliderProps {
  min: number;
  max: number;
  defaultRangeStart: number;
  defaultRangeEnd: number;
  onChange: (rangeStart: number, rangeEnd: number) => void;
  markers?: number[];
  scaleMethod?: ScaleMethod;
  priceToString?: (value: number) => string;
  round?: number | false;
  disabled?: boolean;
}

export default function RangeSlider({
  min,
  max,
  defaultRangeStart,
  defaultRangeEnd,
  onChange,
  markers = [],
  scaleMethod = "linear",
  priceToString: label = (value) => value.toLocaleString(),
  round = false,
  disabled = false,
}: RangeSliderProps) {
  const getScaledValue = getScaler(min, max, scaleMethod);
  const getVisualValue = getUnscaler(min, max, scaleMethod);

  // 슬라이더 html 요소를 가리킴
  const slider1 = useRef<HTMLInputElement>(null);
  const slider2 = useRef<HTMLInputElement>(null);

  // 라벨 html 요소를 가리킴
  const [startLabelWidth, setStartLabelWidth] = useState(0);
  const [endLabelWidth, setEndLabelWidth] = useState(0);
  const startLabelRef = useRef<HTMLDivElement>(null);
  const endLabelRef = useRef<HTMLDivElement>(null);

  // 라벨의 너비 추적
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === startLabelRef.current) {
          setStartLabelWidth(entry.contentRect.width);
        } else if (entry.target === endLabelRef.current) {
          setEndLabelWidth(entry.contentRect.width);
        }
      }
    });

    if (startLabelRef.current) observer.observe(startLabelRef.current);
    if (endLabelRef.current) observer.observe(endLabelRef.current);

    return () => observer.disconnect();
  }, [startLabelRef, endLabelRef]);

  // 반환 값
  const [start, setStart] = useState<number>(defaultRangeStart);
  const [end, setEnd] = useState<number>(defaultRangeEnd);

  // 원본 값
  const [visualStart, setVisualStart] = useState<number>(
    getVisualValue(defaultRangeStart)
  );
  const [visualEnd, setVisualEnd] = useState<number>(
    getVisualValue(defaultRangeEnd)
  );

  // left 계산 함수
  function getLeftStyle(value: number, width = 0) {
    return `max(${width / 2}px, calc(${value} / 100 * (100% - 24px) + 12px))`;
  }

  // min max 전환 함수
  function handleSliderChange(index: number) {
    console.assert(index === 1 || index === 2, "index must be 1 or 2");

    const value = (index === 1 ? slider1 : slider2).current?.valueAsNumber;
    const oppositeValue = (index === 1 ? slider2 : slider1).current
      ?.valueAsNumber;

    if (value === undefined || oppositeValue === undefined) {
      return;
    }

    let newStart, newEnd;
    if (value > oppositeValue) {
      setVisualStart(oppositeValue);
      setVisualEnd(value);
      newStart = getScaledValue(oppositeValue);
      newEnd = getScaledValue(value);
    } else {
      setVisualStart(value);
      setVisualEnd(oppositeValue);
      newStart = getScaledValue(value);
      newEnd = getScaledValue(oppositeValue);
    }

    if (round !== false) {
      newStart = Math.round(newStart / round) * round;
      newEnd = Math.round(newEnd / round) * round;
    }

    setStart(newStart);
    setEnd(newEnd);
    onChange(newStart, newEnd);
  }

  function getLabelStyle(
    visualValue: number,
    width: number
  ): React.CSSProperties {
    if (visualValue < 50) {
      return {
        transform: "translate(-50%, calc(-100% - 12px - 5px))",
        left: getLeftStyle(visualValue, width),
        textAlign: "left",
      };
    } else {
      return {
        transform: "translate(50%, calc(-100% - 12px - 5px))",
        right: getLeftStyle(100 - visualValue, width),
        textAlign: "right",
      };
    }
  }

  // 라벨의 zIndex 및 투명도 조정
  function adjustLabelStyle(index: 0 | 1) {
    if (startLabelRef.current === null || endLabelRef.current === null) return;

    const startLabelBound = startLabelRef.current.getBoundingClientRect();
    const endLabelBound = endLabelRef.current.getBoundingClientRect();

    // zIndex 조정
    if (index === 0) {
      startLabelRef.current.style.setProperty("z-index", "1");
      endLabelRef.current.style.setProperty("z-index", "0");
    } else {
      startLabelRef.current.style.setProperty("z-index", "0");
      endLabelRef.current.style.setProperty("z-index", "1");
    }

    // 투명도 조정
    const distance = endLabelBound.left - startLabelBound.right;
    let opacity = distance / 100;
    if (index === 0) {
      opacity += startLabelBound.width / 100;
      startLabelRef.current.style.removeProperty("opacity");
      endLabelRef.current.style.setProperty("opacity", opacity.toString());
    } else {
      opacity += endLabelBound.width / 100;
      endLabelRef.current.style.removeProperty("opacity");
      startLabelRef.current.style.setProperty("opacity", opacity.toString());
    }
  }

  useEffect(() => adjustLabelStyle(0), [visualStart]);
  useEffect(() => adjustLabelStyle(1), [visualEnd]);

  useEffect(() => {
    handleSliderChange(1);
    handleSliderChange(2);
  }, [min, max]);

  return (
    <S.Container>
      {/* range input thumb 위에 있는 input의 현재 값 표시 */}
      <S.Label
        style={getLabelStyle(visualStart, startLabelWidth)}
        ref={startLabelRef}
      >
        {label(start)}
      </S.Label>
      <S.Label
        style={getLabelStyle(visualEnd, endLabelWidth)}
        ref={endLabelRef}
      >
        {label(end)}
      </S.Label>

      <S.Slider
        min={0}
        max={100}
        step={0.1}
        defaultValue={getVisualValue(defaultRangeStart)}
        onChange={() => {
          handleSliderChange(1);
        }}
        ref={slider1}
        disabled={disabled}
      />
      <S.Slider
        min={0}
        max={100}
        step={0.1}
        defaultValue={getVisualValue(defaultRangeEnd)}
        onChange={() => {
          handleSliderChange(2);
        }}
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
          <S.MarkerText>{label(value)}</S.MarkerText>
        </S.Marker>
      ))}
    </S.Container>
  );
}
