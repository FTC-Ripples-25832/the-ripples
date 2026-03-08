import { create } from "zustand"

// Extend this store if you need!

export interface AppStore {
  fontsLoaded: boolean
  /** True once the DOM is completly loaded and interactive */
  pageLoadedComplete: boolean
  highPriorityAnimationRunning: boolean
  reducedMotion: boolean
  isDebug: boolean

  // Global language state for i18n
  lang: "en" | "zh"
  setLang: (lang: "en" | "zh") => void
  toggleLang: () => void

  setFontsLoaded: (fontsLoaded: boolean) => void
  setReducedMotion: (reducedMotion: boolean) => void
}

export const useAppStore = create<AppStore>((set, get) => {
  const persistedLang =
    typeof window !== "undefined"
      ? (window.localStorage.getItem("ripples-lang") as "en" | "zh" | null)
      : null

  const store: AppStore = {
    pageLoadedComplete: false,
    fontsLoaded: false,
    highPriorityAnimationRunning: false,
    reducedMotion: false,
    isDebug: false,

    // Initialize language deterministically; persist if missing
    lang:
      persistedLang === "en" || persistedLang === "zh" ? persistedLang : "en",
    setLang: (lang: "en" | "zh") => {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("ripples-lang", lang)
      }
      set((s) => ({ ...s, lang }))
    },
    toggleLang: () => {
      const next = get().lang === "en" ? "zh" : "en"
      if (typeof window !== "undefined") {
        window.localStorage.setItem("ripples-lang", next)
      }
      set((s) => ({ ...s, lang: next }))
    },

    setFontsLoaded: (fontsLoaded: boolean) =>
      set((s) => ({ ...s, fontsLoaded })),
    setReducedMotion: (reducedMotion: boolean) =>
      set((s) => ({ ...s, reducedMotion }))
  }

  if (typeof window !== "undefined") {
    const url = new URL(document.location.href)

    const hasDebugParam = url.searchParams.has("debug")
    store.isDebug = hasDebugParam

    // Ensure initial persistence for lang if none present
    if (!window.localStorage.getItem("ripples-lang")) {
      window.localStorage.setItem("ripples-lang", store.lang)
    }
  }

  return store
})
