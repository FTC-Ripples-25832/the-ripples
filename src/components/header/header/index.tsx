"use client"

import React from "react"
// import { experiments } from "~/app/experiments"
import Link from "~/components/primitives/link"

import { GithubLink } from "./github-link"
import { useAppStore } from "~/context/use-app-store"
// import MobileMenu from "./mobile-menu"

export const Header = () => {
  // Guard during server render to avoid calling hooks before "use client" hydration
  // Delay reading localStorage until mounted
  // simple client-only i18n toggle using localStorage for now
  const { lang, toggleLang } = useAppStore()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const t = (en: string, zh: string) => (lang === "en" ? en : zh)

  // Avoid mismatches before hydration by rendering a neutral shell without language-dependent text
  if (!mounted) {
    return (
      <div className="sticky w-full top-0 p-0 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/50 z-over-canvas">
        <header className="h-[3rem] px-4 md:px-6 flex items-center justify-between z-40 relative border-b border-[var(--color-gray-lighter)]">
          <div className="flex basis-[30%] flex-grow items-center gap-6 md:gap-8">
            <Link href="/" className="flex items-center gap-2" aria-label="Home">
              <img src="/images/Ripples.png" alt="Ripples 25832" className="h-10 w-auto" />
              <span className="sr-only">Ripples 25832</span>
            </Link>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <div className="h-6 w-10 rounded border border-white/10" aria-hidden="true" />
            <GithubLink />
          </div>
        </header>
      </div>
    )
  }

  return (
    <>
      <div className="sticky w-full top-0 p-0 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/50 z-over-canvas">
        <header className="h-[3rem] px-4 md:px-6 flex items-center justify-between z-40 relative border-b border-[var(--color-gray-lighter)]">
          <div className="flex basis-[30%] flex-grow items-center gap-6 md:gap-8">
            <Link href="/" className="flex items-center gap-2">
              <img src="/images/Ripples.png" alt="Ripples 25832" className="h-10 w-auto" />
              <span className="sr-only">Ripples 25832</span>
            </Link>

            {/* Team navigation links */}
            <nav aria-label="Primary" className="hidden md:block">
              <ul className="flex flex-row font-mono gap-x-4 text-sm items-center">
                <li>
                  <Link href="/" className="hover:underline hover:opacity-80 transition">
                    <span>{t("HOME", "首页")}</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline hover:opacity-80 transition">
                    <span>{t("ABOUT US", "关于我们")}</span>
                  </Link>
                </li>
                <li>
                  <Link href="/achievements" className="hover:underline hover:opacity-80 transition">
                    <span>{t("ACHIEVEMENTS", "成就")}</span>
                  </Link>
                </li>
                <li>
                  <Link href="/robot" className="hover:underline hover:opacity-80 transition">
                    <span>{t("OUR ROBOT", "我们的机器人")}</span>
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:underline hover:opacity-80 transition">
                    <span>{t("RESOURCES", "资源")}</span>
                  </Link>
                </li>
                <li>
                  <Link href="/partnerships" className="hover:underline hover:opacity-80 transition">
                    <span>{t("PARTNERSHIPS", "合作伙伴")}</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline hover:opacity-80 transition">
                    <span>{t("CONTACT", "联系我们")}</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <button
              type="button"
              onClick={toggleLang}
              className="font-mono text-xs md:text-sm px-2 py-1 rounded border border-white/20 hover:border-white/40 text-tiffany-300 hover:text-white transition"
              aria-label="Toggle language"
            >
              {lang === "en" ? "中文" : "EN"}
            </button>

            <Link
              href="/timeline"
              className="hidden md:inline font-mono text-tiffany-300 hover:underline hover:opacity-80 transition"
            >
              <span className="font-bold">{t("NEWS", "新闻")}</span>
              <span className="hidden lg:inline">: {t("Off to Worlds!", "进军世界赛！")}</span>
            </Link>

            <GithubLink />
          </div>
        </header>

        {/* Mobile quick nav */}
        <nav aria-label="Primary Mobile" className="md:hidden border-b border-[var(--color-gray-lighter)] px-4 py-2">
          <ul className="grid grid-cols-3 gap-2 text-[11px] font-mono">
            <li><Link href="/" className="block text-center py-1 rounded bg-white/5 hover:bg-white/10 transition">{t("HOME","首页")}</Link></li>
            <li><Link href="/about" className="block text-center py-1 rounded bg-white/5 hover:bg-white/10 transition">{t("ABOUT","关于我们")}</Link></li>
            <li><Link href="/achievements" className="block text-center py-1 rounded bg-white/5 hover:bg-white/10 transition">{t("ACHIEVE","成就")}</Link></li>
            <li><Link href="/robot" className="block text-center py-1 rounded bg-white/5 hover:bg-white/10 transition">{t("ROBOT","机器人")}</Link></li>
            <li><Link href="/resources" className="block text-center py-1 rounded bg-white/5 hover:bg-white/10 transition">{t("RES","资源")}</Link></li>
            <li><Link href="/partnerships" className="block text-center py-1 rounded bg-white/5 hover:bg-white/10 transition">{t("PARTNERS","伙伴")}</Link></li>
            <li className="col-span-3"><Link href="/contact" className="block text-center py-1 rounded bg-white/5 hover:bg-white/10 transition">{t("CONTACT","联系我们")}</Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}
