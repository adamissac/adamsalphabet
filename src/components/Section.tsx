import type { HTMLAttributes } from "react";
import Container from "./Container";
import MathBackdrop, { type BackdropDensity, type BackdropVariant } from "./MathBackdrop";
import Reveal from "./Reveal";

type Tone = "default" | "muted" | "brand" | "hero" | "dark";

const TONE: Record<Tone, string> = {
  default: "bg-[var(--color-bg)]",
  muted: "bg-[var(--color-surface-2)]",
  brand: "bg-[var(--color-brand-50)]",
  hero: "hero-surface",
  dark: "bg-[var(--color-ink)] text-white",
};

type Props = HTMLAttributes<HTMLElement> & {
  tone?: Tone;
  size?: "sm" | "md" | "lg" | "xl";
  containerSize?: "sm" | "md" | "lg" | "xl";
  /** Scatter math symbols + clipart behind the section content. */
  decorated?: false | BackdropVariant;
  decoratedDensity?: BackdropDensity;
  /** Keep symbols in the margins so they don't cover text. */
  decoratedContentSafe?: boolean;
  /** Fade/slide section content in when scrolled into view. */
  reveal?: boolean;
};

const PADDING = {
  sm: "py-8 sm:py-12",
  md: "py-12 sm:py-20",
  lg: "py-16 sm:py-28",
  xl: "py-20 sm:py-32",
};

export default function Section({
  tone = "default",
  size = "md",
  containerSize = "xl",
  decorated = false,
  decoratedDensity = "dense",
  decoratedContentSafe = false,
  reveal = true,
  className = "",
  children,
  ...rest
}: Props) {
  const showBackdrop = Boolean(decorated) || tone === "dark";
  const backdropVariant: BackdropVariant =
    tone === "dark" ? "dark" : (decorated as BackdropVariant);

  const inner = reveal ? <Reveal variant="up">{children}</Reveal> : children;

  return (
    <section
      className={`${TONE[tone]} ${PADDING[size]} ${showBackdrop ? "relative overflow-hidden" : ""} ${className}`}
      {...rest}
    >
      {showBackdrop && (
        <MathBackdrop
          variant={backdropVariant}
          density={tone === "dark" ? "medium" : decoratedDensity}
          contentSafe={decoratedContentSafe || tone === "dark"}
          watermark={tone !== "dark"}
        />
      )}
      <Container size={containerSize} className={showBackdrop ? "relative z-[1]" : undefined}>
        {inner}
      </Container>
    </section>
  );
}
