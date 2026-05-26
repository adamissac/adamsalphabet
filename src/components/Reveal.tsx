"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type RevealVariant = "up" | "fade" | "left" | "right";

/**
 * Scroll-triggered reveal. Fades/slides content in once when it enters
 * the viewport. Respects prefers-reduced-motion.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  variant = "up",
  stagger = false,
  threshold = 0.12,
  style,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  stagger?: boolean;
  threshold?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -32px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const classes = [
    "reveal",
    `reveal-${variant}`,
    stagger ? "reveal-stagger" : "",
    visible ? "is-visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const mergedStyle: CSSProperties = {
    ...style,
    ...(delay > 0 && !stagger ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : {}),
  };

  return (
    <Tag ref={ref as never} className={classes} style={mergedStyle}>
      {children}
    </Tag>
  );
}
