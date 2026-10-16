import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely — prevents class conflicts */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

