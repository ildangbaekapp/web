import React, { useRef, useCallback } from "react";

import type { RangeSliderProps } from "../RangeSlider.types";

import useLabelInteraction from "./useLabelInteraction";
import useLabelSizing from "./useLabelSizing";
import useRangeState from "./useRangeState";
import useScaling from "./useScaling";

type UseRangeSliderParams = Omit<
  RangeSliderProps,
  "markers" | "toString" | "disabled"
>;

export default function useRangeSlider({
  min,
  max,
  start: startProp,
  end: endProp,
  defaultStart,
  defaultEnd,
  onChange,
  round = false,
  scaleMethod = "linear",
}: UseRangeSliderParams) {
  const { scale, unscale: getVisualValue } = useScaling(min, max, scaleMethod);
  const { start, end, setValues } = useRangeState({
    start: startProp,
    end: endProp,
    defaultStart,
    defaultEnd,
    min,
    max,
  });
  const { startLabelRef, endLabelRef, startLabelWidth, endLabelWidth } =
    useLabelSizing();

  const slider1 = useRef<HTMLInputElement>(null);
  const slider2 = useRef<HTMLInputElement>(null);

  useLabelInteraction({
    startLabelRef,
    endLabelRef,
    slider1Ref: slider1,
    slider2Ref: slider2,
  });

  const visualStart = getVisualValue(start);
  const visualEnd = getVisualValue(end);

  const getLeftStyle = useCallback((value: number, width = 0) => {
    return `max(${width / 2}px, calc(${value} / 100 * (100% - 24px) + 12px))`;
  }, []);

  const handleSliderChange = useCallback(() => {
    const slider1Value = slider1.current?.valueAsNumber;
    const slider2Value = slider2.current?.valueAsNumber;

    if (slider1Value === undefined || slider2Value === undefined) {
      return;
    }

    let newStart, newEnd;
    if (slider1Value > slider2Value) {
      newStart = scale(slider2Value);
      newEnd = scale(slider1Value);
    } else {
      newStart = scale(slider1Value);
      newEnd = scale(slider2Value);
    }

    if (round !== false && round > 0) {
      newStart = Math.round(newStart / round) * round;
      newEnd = Math.round(newEnd / round) * round;
    }

    setValues(newStart, newEnd);
    onChange(newStart, newEnd);
  }, [onChange, round, scale, setValues]);

  const getLabelStyle = useCallback(
    (visualValue: number, width: number): React.CSSProperties => {
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
    },
    [getLeftStyle]
  );

  return {
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
  };
}
