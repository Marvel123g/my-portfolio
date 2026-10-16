export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center" aria-busy="true" aria-label="Loading">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-px bg-canvas-border overflow-hidden relative">
          <div
            className="absolute inset-y-0 left-0 bg-accent"
            style={{
              animation: "loading-bar 1s ease-in-out infinite",
              width: "50%",
            }}
          />
        </div>
        <span className="font-mono text-[10px] text-ink-dim tracking-[0.2em] uppercase">
          Loading...
        </span>
      </div>
      <style>{`
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}

