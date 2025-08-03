import { useState, useRef, useEffect } from "react";

export default function useLabelSizing() {
  const startLabelRef = useRef<HTMLDivElement>(null);
  const endLabelRef = useRef<HTMLDivElement>(null);
  const [startLabelWidth, setStartLabelWidth] = useState(0);
  const [endLabelWidth, setEndLabelWidth] = useState(0);

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

    const startEl = startLabelRef.current;
    const endEl = endLabelRef.current;

    if (startEl) observer.observe(startEl);
    if (endEl) observer.observe(endEl);

    return () => {
      if (startEl) observer.unobserve(startEl);
      if (endEl) observer.unobserve(endEl);
      observer.disconnect();
    };
  }, []);

  return {
    startLabelRef,
    endLabelRef,
    startLabelWidth,
    endLabelWidth,
  };
}
