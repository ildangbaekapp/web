export type ScaleMethod = "linear" | "square";

export interface RangeSliderProps {
  min: number;
  max: number;
  start?: number;
  end?: number;
  defaultStart?: number;
  defaultEnd?: number;
  onChange: (rangeStart: number, rangeEnd: number) => void;
  markers?: number[];
  scaleMethod?: ScaleMethod;
  toString?: (value: number) => string;
  round?: number | false;
  disabled?: boolean;
}