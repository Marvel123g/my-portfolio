"use client";

import { useEffect, useRef, useState } from "react";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiCopy,
  FiCheck,
} from "react-icons/fi";
import toast from "react-hot-toast";

const EMAIL = "marvellousolorunwa23@gmail.com";

const RESUME_URL =
  "https://drive.google.com/file/d/1_QOHi66mW_BIgFu1DOZIoBVQxrVo0Hn6/view?usp=drivesdk";

const ACTION_CLASS =
  "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-5 py-3 text-xs font-semibold font-mono uppercase tracking-[0.08em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas";

export function HeroActions() {
  const [copied, setCopied] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);

      setCopied(true);

      toast.success("Email copied to clipboard!");

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setCopied(false);
        timeoutRef.current = null;
      }, 2500);
    } catch {
      toast.error("Unable to copy email. Please copy it manually.");

      setCopied(false);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3 w-full">
      {/* Primary action */}
      <a
        href="#projects"
        className={`${ACTION_CLASS} group bg-accent max-[400px]:w-full text-canvas hover:bg-accent-dim`}
      >
        View my work

        <FiArrowDown
          size={14}
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-y-0.5"
        />
      </a>

      {/* Resume */}
      <a
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${ACTION_CLASS} border  max-[400px]:w-full border-canvas-border bg-canvas-card text-ink hover:border-accent/50 hover:text-accent`}
      >
        View résumé

        <FiArrowUpRight
          size={14}
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </a>

      {/* Copy email */}
      <button
        type="button"
        onClick={copyEmail}
        aria-label={
          copied
            ? "Email address copied"
            : "Copy email address to clipboard"
        }
        className={`${ACTION_CLASS} border  max-[400px]:w-full border-transparent text-ink-muted hover:border-canvas-border hover:text-ink`}
      >
        {copied ? (
          <FiCheck
            size={14}
            className="text-accent"
            aria-hidden="true"
          />
        ) : (
          <FiCopy size={14} aria-hidden="true" />
        )}

        {copied ? "Copied!" : "Copy email"}
      </button>
    </div>
  );
}