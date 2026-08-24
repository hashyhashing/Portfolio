"use client";

import { useEffect, useRef, useState } from "react";

export function MeterBar({
  fillPercent,
  onInk = false,
}: {
  fillPercent: number;
  onInk?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`meter-track ${onInk ? "on-ink" : ""}`}
    >
      <div
        className={`meter-fill ${visible ? "is-visible" : ""}`}
        style={{ ["--fill" as string]: `${fillPercent}%` }}
      />
    </div>
  );
}
