import { useEffect, useCallback } from "react";

interface UseLabelInteractionParams {
  startLabelRef: React.RefObject<HTMLDivElement | null>;
  endLabelRef: React.RefObject<HTMLDivElement | null>;
  slider1Ref: React.RefObject<HTMLInputElement | null>;
  slider2Ref: React.RefObject<HTMLInputElement | null>;
}

export default function useLabelInteraction({
  startLabelRef,
  endLabelRef,
  slider1Ref,
  slider2Ref,
}: UseLabelInteractionParams) {
  const adjustLabelStyle = useCallback(() => {
    if (!startLabelRef.current || !endLabelRef.current) return;

    const isStartFocused = document.activeElement === slider1Ref.current;
    const isEndFocused = document.activeElement === slider2Ref.current;

    if (isStartFocused) {
      startLabelRef.current.style.zIndex = "1";
      endLabelRef.current.style.zIndex = "0";
    } else if (isEndFocused) {
      startLabelRef.current.style.zIndex = "0";
      endLabelRef.current.style.zIndex = "1";
    }

    const startLabelBound = startLabelRef.current.getBoundingClientRect();
    const endLabelBound = endLabelRef.current.getBoundingClientRect();
    const distance = endLabelBound.left - startLabelBound.right;
    const opacity = Math.min(1, Math.max(0, distance / 20));

    if (isStartFocused) {
      endLabelRef.current.style.opacity = opacity.toString();
      startLabelRef.current.style.opacity = "1";
    } else if (isEndFocused) {
      startLabelRef.current.style.opacity = opacity.toString();
      endLabelRef.current.style.opacity = "1";
    }
  }, [startLabelRef, endLabelRef, slider1Ref, slider2Ref]);

  useEffect(() => {
    const slider1El = slider1Ref.current;
    const slider2El = slider2Ref.current;

    slider1El?.addEventListener("input", adjustLabelStyle);
    slider2El?.addEventListener("input", adjustLabelStyle);

    return () => {
      slider1El?.removeEventListener("input", adjustLabelStyle);
      slider2El?.removeEventListener("input", adjustLabelStyle);
    };
  }, [adjustLabelStyle, slider1Ref, slider2Ref]);
}
