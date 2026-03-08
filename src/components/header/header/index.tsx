"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import React from "react"

import Link from "~/components/primitives/link"
import { useAppStore } from "~/context/use-app-store"
import { cn } from "~/lib/utils/utils"

import { GithubLink } from "./github-link"

const NAV_ITEMS = [
  { href: "/about", en: "ABOUT", zh: "关于我们" },
  { href: "/achievements", en: "ACHIEVEMENTS", zh: "成就" },
  { href: "/robot", en: "ROBOT", zh: "我们的机器人" },
  { href: "/resources", en: "RESOURCES", zh: "资源" },
  { href: "/partnerships", en: "PARTNERS", zh: "合作伙伴" },
  { href: "/contact", en: "CONTACT", zh: "联系我们" }
]

export const Header = () => {
  const { lang, toggleLang } = useAppStore()
  const [mounted, setMounted] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const t = (en: string, zh: string) => (lang === "en" ? en : zh)

  if (!mounted) {
    return (
      <div className="sticky top-0 z-over-canvas border-b border-white/10 bg-black/45 backdrop-blur-md">
        <header className="shell-container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="Home">
            <Image
              src="/images/Ripples.png"
              alt="Ripples 25832"
              width={108}
              height={42}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <div className="h-8 w-10 rounded-full border border-white/15" />
        </header>
      </div>
    )
  }

  return (
    <div className="sticky top-0 z-over-canvas border-b border-white/10 bg-black/45 backdrop-blur-md">
      <header className="shell-container flex h-16 items-center gap-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="Home"
        >
          <Image
            src="/images/Ripples.png"
            alt="Ripples 25832"
            width={108}
            height={42}
            className="h-10 w-auto"
            priority
          />
          <div className="hidden sm:block">
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/55">
              FTC TEAM 25832
            </p>
            <p className="text-sm font-semibold text-white/85">RIPPLES</p>
          </div>
        </Link>

        <nav aria-label="Primary" className="ml-4 hidden lg:block">
          <ul className="flex items-center gap-5 text-[12px] font-semibold tracking-[0.1em]">
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href))

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "border-b-2 pb-1 transition",
                      isActive
                        ? "border-tiffany-300 text-tiffany-100"
                        : "border-transparent text-white/70 hover:text-white"
                    )}
                  >
                    {t(item.en, item.zh)}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLang}
            className="rounded-full border border-white/20 px-2.5 py-1.5 text-xs font-semibold tracking-[0.08em] text-white/80 transition hover:border-white/45 hover:text-white"
            aria-label="Toggle language"
          >
            {lang === "en" ? "中文" : "EN"}
          </button>
          <GithubLink />
        </div>
      </header>

      <nav aria-label="Primary Mobile" className="border-t border-white/10 lg:hidden">
        <div className="shell-container overflow-x-auto py-2">
          <ul className="flex min-w-max gap-4 text-[11px] font-semibold tracking-[0.08em] text-white/70">
            <li>
              <Link
                href="/"
                className={cn(
                  "border-b pb-1 transition",
                  pathname === "/"
                    ? "border-tiffany-300 text-tiffany-100"
                    : "border-transparent hover:text-white"
                )}
              >
                {t("HOME", "首页")}
              </Link>
            </li>
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href))

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "border-b pb-1 transition",
                      isActive
                        ? "border-tiffany-300 text-tiffany-100"
                        : "border-transparent hover:text-white"
                    )}
                  >
                    {t(item.en, item.zh)}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </div>
  )
}
