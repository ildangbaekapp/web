import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

import * as S from "./Ad.styles";

const AD_IMAGES = [
  "https://placehold.co/400x200?text=Ad+1",
  "https://placehold.co/400x200?text=Ad+2",
  "https://placehold.co/400x200?text=Ad+3",
  "https://placehold.co/400x200?text=Ad+4",
  "https://placehold.co/400x200?text=Ad+5",
];

const SLIDE_INTERVAL = 10000;

export default function Ad() {
  const [page, setPage] = useState(0);
  const [width, setWidth] = useState(0);

  const x = useMotionValue(0);
  const animatedX = useSpring(x, {
    stiffness: 300,
    damping: 30,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const dragStartRef = useRef({ x: 0 });
  const isDraggingRef = useRef(false);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setPage((prev) => (prev + 1) % AD_IMAGES.length);
    }, SLIDE_INTERVAL);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const observer = new ResizeObserver((entries) => {
        if (entries[0]) {
          setWidth(entries[0].contentRect.width);
        }
      });
      observer.observe(container);
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    if (containerRef.current && width > 0 && !isDraggingRef.current) {
      x.set(-page * width);
    }
  }, [page, width]);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    dragStartRef.current.x = e.clientX;
    stopAutoSlide();
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || !containerRef.current) return;
    const currentX = e.clientX;
    const dragX = currentX - dragStartRef.current.x;
    const currentOffset = -page * width + dragX;

    x.set(currentOffset);
    e.preventDefault(); // Prevent text selection while dragging
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    const dragX = e.clientX - dragStartRef.current.x;
    const swipeThreshold = width / 4;

    let newPage = page;
    if (dragX < -swipeThreshold) {
      newPage = (page + 1) % AD_IMAGES.length;
    } else if (dragX > swipeThreshold) {
      newPage = (page - 1 + AD_IMAGES.length) % AD_IMAGES.length;
    }

    if (newPage !== page) {
      setPage(newPage);
      x.set(-newPage * width);
    } else if (containerRef.current) {
      x.set(-page * width);
    }

    startAutoSlide();
  };

  return (
    <S.Wrapper
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <S.AdContainer
        ref={containerRef}
        style={{ x: animatedX }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {AD_IMAGES.map((imageUrl) => (
          <S.AdSlide key={imageUrl} $imageUrl={imageUrl} />
        ))}
      </S.AdContainer>
      <S.Count>
        <S.CountText>
          {page + 1} / {AD_IMAGES.length}
        </S.CountText>
      </S.Count>
    </S.Wrapper>
  );
}
