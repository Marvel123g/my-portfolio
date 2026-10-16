import { cn } from "@/lib/utils";

interface SectionLabelProps {
  number: string;
  label: string;
  className?: string;
}

/**
 * Numbered section label motif — "01 / ABOUT", "02 / WORK" etc.
 * Server component — no "use client" needed.
 */
export function SectionLabel({ number, label, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 mb-6",
        className,
      )}
    >
      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-dim leading-none">
        {number}
      </span>
      <span className="h-px w-8 bg-canvas-border block" />
      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent leading-none">
        {label}
      </span>
    </div>
  );
}

