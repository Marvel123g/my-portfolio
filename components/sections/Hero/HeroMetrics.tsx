import { METRICS } from "./hero.data";

export function HeroMetrics() {
  return (
    <div
      className="grid w-full max-w-xl grid-cols-3 border-t border-canvas-border pt-6"
      role="list"
      aria-label="Professional experience and skills"
    >
      {METRICS.map((metric, index) => (
        <div
          key={metric.label}
          role="listitem"
          className={`flex flex-col gap-1 ${
            index > 0 ? "border-l border-canvas-border pl-4 sm:pl-6" : ""
          }`}
        >
          <span
            className="text-2xl font-semibold font-space tracking-tight text-ink sm:text-3xl"
          >
            {metric.value}
          </span>

          <span className="text-[9px] font-medium uppercase leading-relaxed tracking-[0.09em] text-ink-dim sm:text-[10px] sm:tracking-[0.12em] font-sans">
            {metric.label}
          </span>
        </div>
      ))}
    </div>
  );
}