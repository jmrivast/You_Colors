import type { ReactNode } from "react";

export function Arrow({ direction = "up" }: { direction?: "up" | "right" }) {
  return (
    <svg className="arrow-icon" viewBox="0 0 20 20" aria-hidden="true">
      {direction === "up" ? (
        <path d="M5 15 15 5M7 5h8v8" />
      ) : (
        <path d="M3 10h14M12 5l5 5-5 5" />
      )}
    </svg>
  );
}

export function RegistrationMark({ className = "" }: { className?: string }) {
  return <span className={`registration-mark ${className}`} aria-hidden="true" />;
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="section-label">{children}</p>;
}

export function LogoSlot({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`logo-slot ${compact ? "logo-slot--compact" : ""}`}
      role="img"
      aria-label="Espacio reservado para el logotipo oficial de You Color"
      data-od-id="you-color-logo-slot"
    >
      <span className="sr-only">Logotipo de You Color pendiente de reemplazo</span>
    </div>
  );
}

type VisualVariant =
  | "ink"
  | "paper"
  | "binding"
  | "fold"
  | "edge"
  | "gloss"
  | "cover"
  | "spread"
  | "closeup"
  | "signage"
  | "press"
  | "finishing";

// Temporary unbranded visual asset. Replace this component with approved photography
// while keeping its aspect-ratio wrapper and accessible label intact.
export function PrintVisual({
  variant,
  className = "",
  label,
}: {
  variant: VisualVariant;
  className?: string;
  label: string;
}) {
  return (
    <div
      className={`print-visual print-visual--${variant} ${className}`}
      role="img"
      aria-label={`${label}. Composición editorial temporal y reemplazable.`}
      data-placeholder-asset={variant}
    >
      <span className="visual-grain" aria-hidden="true" />
      <span className="visual-ink visual-ink--one" aria-hidden="true" />
      <span className="visual-ink visual-ink--two" aria-hidden="true" />
      <span className="visual-sheet-edge" aria-hidden="true" />
    </div>
  );
}
