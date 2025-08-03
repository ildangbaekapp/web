import { useState } from "react";

interface UseRangeStateParams {
  start?: number;
  end?: number;
  defaultStart?: number;
  defaultEnd?: number;
  min: number;
  max: number;
}

export default function useRangeState({
  start: startProp,
  end: endProp,
  defaultStart,
  defaultEnd,
  min,
  max,
}: UseRangeStateParams) {
  const [internalStart, setInternalStart] = useState<number>(
    defaultStart ?? min
  );
  const [internalEnd, setInternalEnd] = useState<number>(
    defaultEnd ?? max * 0.8
  );

  const isControlled = startProp !== undefined && endProp !== undefined;

  const start = isControlled ? startProp : internalStart;
  const end = isControlled ? endProp : internalEnd;

  const setValues = (newStart: number, newEnd: number) => {
    if (!isControlled) {
      setInternalStart(newStart);
      setInternalEnd(newEnd);
    }
  };

  return { start, end, isControlled, setValues };
}
