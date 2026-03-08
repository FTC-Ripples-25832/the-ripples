"use client"

import { useAppStore } from "~/context/use-app-store"

const ORG_URL = "https://github.com/FTC-Ripples-25832"

const repositories = [
  {
    name: "TORRENT-Decode",
    href: `${ORG_URL}/TORRENT-Decode`,
    visibility: "Public archive",
    stack: "Java",
    license: "BSD 3-Clause Clear License",
    stars: 0,
    forks: 1,
    updated: "Updated last month"
  },
  {
    name: "FTC-Stats-new",
    href: `${ORG_URL}/FTC-Stats-new`,
    visibility: "Public",
    stack: "Svelte",
    license: "GNU General Public License v3.0",
    stars: 0,
    forks: 1,
    updated: "Updated last month"
  },
  {
    name: "TORRENT-Decode-TestingGrounds",
    href: `${ORG_URL}/TORRENT-Decode-TestingGrounds`,
    visibility: "Public",
    stack: "Java",
    license: "BSD 3-Clause Clear License",
    stars: 0,
    forks: 1,
    updated: "Updated on Dec 21, 2025"
  },
  {
    name: "ripples-25832-IntoTheDeep",
    href: `${ORG_URL}/ripples-25832-IntoTheDeep`,
    visibility: "Public archive",
    stack: "FTC / Java",
    license: "BSD 3-Clause Clear License",
    stars: 1,
    forks: 1,
    updated: "Updated on Aug 26, 2025"
  }
]

const koalaDocs = {
  repo: "https://github.com/Koala-Log/docs",
  site: "https://koala-log.github.io/docs/",
  updated: "Updated 8 months ago",
  stack: "MDX / TypeScript"
}

export default function ResourcesPage() {
  const { lang } = useAppStore()
  const t = (en: string, zh: string) => (lang === "en" ? en : zh)

  return (
    <main className="container mx-auto space-y-10 px-4 py-10 text-white">
      <header>
        <h1 className="text-4xl font-extrabold md:text-6xl">
          {t("Resources", "资源")}
        </h1>
        <p className="mt-3 text-white/80">
          {t(
            "Official repositories and docs used by Team 25832.",
            "25832 团队使用的官方仓库与文档。"
          )}
        </p>
      </header>

      <section>
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-2xl font-bold text-orange-400">
            {t("FTC-Ripples-25832 Repositories", "FTC-Ripples-25832 仓库")}
          </h2>
          <a
            href={ORG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline hover:opacity-80"
          >
            {t("Open Organization", "打开组织主页")}
          </a>
        </div>

        <p className="mb-4 text-sm text-white/70">
          {t(
            "Public repositories only, sorted by latest push.",
            "仅展示公开仓库，按最近更新排序。"
          )}
        </p>

        <ul className="divide-y divide-white/10 border-y border-white/10">
          {repositories.map((repo) => (
            <li key={repo.name} className="py-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <a
                    href={repo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-tiffany-200 underline-offset-4 hover:underline"
                  >
                    {repo.name}
                  </a>
                  <p className="mt-1 text-sm text-white/70">
                    {repo.visibility} · {repo.stack} · {repo.license}
                  </p>
                </div>
                <div className="text-right text-xs text-white/65">
                  <p>
                    ★ {repo.stars} · Forks {repo.forks}
                  </p>
                  <p className="mt-1">{repo.updated}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold text-orange-400">
          {t("Koala-Log Docs", "Koala-Log 文档")}
        </h2>

        <div className="border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-white/80">
            {t(
              "Repository: Koala-Log/docs (Public).",
              "仓库：Koala-Log/docs（公开）。"
            )}
          </p>
          <p className="mt-1 text-sm text-white/70">
            {koalaDocs.stack} · {koalaDocs.updated}
          </p>
          <div className="mt-3 flex flex-wrap gap-4 text-sm">
            <a
              href={koalaDocs.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80"
            >
              GitHub Repository
            </a>
            <a
              href={koalaDocs.site}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80"
            >
              Live Docs
            </a>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold text-orange-400">
          {t("External Link", "外部链接")}
        </h2>
        <a
          href="https://cyclezlab.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-tiffany-200 underline underline-offset-4 hover:opacity-80"
        >
          https://cyclezlab.com
        </a>
      </section>
    </main>
  )
}
