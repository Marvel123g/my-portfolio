"use client";

import { useEffect, useState } from "react";
import { FiMapPin } from "react-icons/fi";

export function HeroStatus() {
  const [lagosTime, setLagosTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const time = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());

      setLagosTime(time);
    };

    updateClock();

    const intervalId = window.setInterval(updateClock, 60_000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Availability */}
      <div className="inline-flex items-center gap-2 rounded-full border border-secondary-border bg-secondary-muted px-3 py-2">
        <span
          className="relative flex h-2 w-2"
          aria-hidden="true"
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-40" />

          <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
        </span>

        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-secondary sm:text-[11px] font-space">
          Open to frontend roles
        </span>
      </div>

      {/* Location and local time */}
      <div className="inline-flex items-center gap-2 rounded-full border border-canvas-border bg-canvas-card px-3 py-2">
        <FiMapPin
          size={12}
          className="shrink-0 text-ink-dim"
          aria-hidden="true"
        />

        <span className="text-[10px] font-space font-semibold uppercase tracking-[0.08em] text-ink-dim sm:text-[11px]">
          Lagos, Nigeria
        </span>

        {lagosTime && (
          <>
            <span
              className="h-3 w-px bg-canvas-border"
              aria-hidden="true"
            />

            <time
              dateTime={lagosTime}
              className="font-mono text-[10px] tabular-nums text-ink-muted"
              aria-label={`Current time in Lagos: ${lagosTime}`}
            >
              {lagosTime}
            </time>
          </>
        )}
      </div>
    </div>
  );
}