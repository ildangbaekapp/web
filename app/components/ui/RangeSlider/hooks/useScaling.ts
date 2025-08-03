import { useCallback } from "react";

import type { ScaleMethod } from "../RangeSlider.types";

export default function useScaling(
  min: number,
  max: number,
  scaleMethod: ScaleMethod = "linear"
) {
  const scale = useCallback(
    (visualValue: number) => {
      const ratio = visualValue / 100;

      if (scaleMethod === "square") {
        return ratio * ratio * (max - min) + min;
      }
      return ratio * (max - min) + min;
    },
    [min, max, scaleMethod]
  );

  const unscale = useCallback(
    (value: number) => {
      if (max - min === 0) return 0;

      if (scaleMethod === "square") {
        const ratio = (value - min) / (max - min);
        if (ratio < 0) return 0;
        return Math.sqrt(ratio) * 100;
      }
      return ((value - min) / (max - min)) * 100;
    },
    [min, max, scaleMethod]
  );

  return { scale, unscale };
}
