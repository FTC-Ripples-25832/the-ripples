"use client";

import { useCallback, useEffect, useState } from "react";

export type Lang = "en" | "zh";

/**
 * useLanguage
 * - Defaults to "en" during SSR to prevent hydration mismatch.
 * - On client mount, safely reads localStorage (wrapped in try/catch).
 * - Setter persists to localStorage safely (wrapped in try/catch).
 */
export function useLanguage() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = window.localStorage.getItem("ripples-lang");
      if (stored === "en" || stored === "zh") {
        setLang(stored);
      }
    } catch (error) {
      console.warn("Failed to access localStorage:", error);
    }
  }, []);

  const setLanguage = useCallback((next: Lang) => {
    setLang(next);
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem("ripples-lang", next);
    } catch (error) {
      console.warn("Failed to write localStorage:", error);
    }
  }, []);

  return { lang, setLang: setLanguage };
}
