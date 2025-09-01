"use client"

import Image from "next/image"
import Link from "next/link"
import React from "react"

import { useAppStore } from "~/context/use-app-store"
import { heroContent, highlights } from "~/data/home"
import { statsData } from "~/data/stats"

export default function HomePage() {
  const { lang } = useAppStore()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const t = (en: string, zh: string) => (lang === "en" ? en : zh)

  // Render a neutral shell before hydration to avoid SSR/CSR text mismatch
  if (!mounted) {
    return (
      <main className="relative bg-black text-white">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[url('/textures/gradient.jpg')] bg-cover bg-center" />
          <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                <span className="block">RIPPLES</span>
                <span className="block text-tiffany-300">&nbsp;</span>
              </h1>
              <p className="text-lg text-white/80">&nbsp;</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="px-16 py-2 rounded bg-orange-500/30 border border-orange-500/40" />
                <span className="px-16 py-2 rounded border border-white/10" />
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/robot-25832.png"
                alt="Robot"
                width={900}
                height={900}
                className="w-full h-auto opacity-70 mix-blend-screen"
                priority
              />
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="relative bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[url('/textures/gradient.jpg')] bg-cover bg-center" />
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              <span className="block">RIPPLES</span>
              <span className="block text-tiffany-300">
                {t(
                  "Making Waves in FIRST Tech Challenge",
                  "在 FIRST 科技挑战赛中掀起波澜"
                )}
              </span>
            </h1>
            <p className="text-lg text-white/80">
              {t(heroContent.subtitle.en, heroContent.subtitle.zh)}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/partnerships"
                className="px-4 py-2 rounded bg-orange-500 text-black font-semibold hover:bg-orange-400 transition"
              >
                {t("Partner with Innovation", "与创新同行")}
              </Link>
              <Link
                href="/resources"
                className="px-4 py-2 rounded border border-white/20 hover:border-white/50 transition"
              >
                {t("Resources", "资源")}
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/robot-25832.png"
              alt="Robot"
              width={900}
              height={900}
              className="w-full h-auto opacity-70 mix-blend-screen"
              priority
            />
          </div>
        </div>
      </section>

      {/* Animated Counters */}
      <section className="container mx-auto px-4 py-10 md:py-14">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {statsData.map((s, i) => (
            <li
              key={i}
              className="rounded-lg border border-white/10 bg-white/5 p-4 md:p-6"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-tiffany-300">
                {s.value}
              </div>
              <div className="text-xs md:text-sm text-white/80 mt-1">
                {t(s.en, s.zh)}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Key Highlights */}
      <section className="container mx-auto px-4 pb-20 grid md:grid-cols-3 gap-6">
        {highlights.map((h, idx) => (
          <div
            key={idx}
            className="rounded-lg border border-white/10 bg-white/5 p-6"
          >
            <h3 className="font-mono text-orange-400 mb-2">
              {t(h.title.en, h.title.zh)}
            </h3>
            <ul className="list-disc list-inside text-sm text-white/85 space-y-1">
              {h.items.map((it, i) => (
                <li key={i}>{t(it.en, it.zh)}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  )
}
