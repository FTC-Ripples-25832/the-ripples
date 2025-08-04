"use client"

import React, { useMemo } from "react"
import { useAppStore } from "~/context/use-app-store"

const OPR_DATA = [
  { label: "Event 1", value: 12 },
  { label: "Event 2", value: 18 },
  { label: "Event 3", value: 26 },
  { label: "Event 4", value: 33 }
]

import dynamic from "next/dynamic"

const SvgDisplacementForm = dynamic(
  () => import("~/app/(three)/svg-displacement/form").then(m => m.Form),
  { ssr: false }
)

export default function AchievementsPage() {
  const { lang } = useAppStore()
  const t = (en: string, zh: string) => (lang === "en" ? en : zh)

  // Placeholder datasets for charts/metrics (static for now)
  // moved OPR data to top-level constant to avoid re-creation on each render

  const milestones = useMemo(() => [
    t("4 robot generations in one season", "单赛季 4 次机器人迭代"),
    t("~91% scoring accuracy across ~40 recorded sessions", "约 40 场记录中整体 ~91% 得分精准度"),
    t("World Top 250 autonomous performance", "自主得分世界前 250")
  ], [lang])

  const community = useMemo(() => [
    t("300+ people reached through outreach and exhibitions", "通过外联与展演影响 300+ 人"),
    t("12 new members trained; school robotics club founded", "培训 12 位新成员；创建学校机器人社团"),
    t("Active international Discord presence (1,000+ messages)", "活跃于国际 Discord（累计 1000+ 条消息）")
  ], [lang])

  return (
    <main className="container mx-auto px-4 py-10 text-white">
      <header className="mb-10">
        <h1 className="text-4xl md:text-6xl font-extrabold">{t("Achievements", "成就")}</h1>
<p className="text-white/80 mt-3">
  {t(
    "Breaking boundaries with measurable progress: reliability, rankings, and outreach impact.",
    "以数据见证突破：可靠性、排名提升与外联影响。"
  )}
</p>
      </header>

      {/* Recent Awards */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-orange-400">
          {t("Recent Awards", "近期奖项")}
        </h2>

        <ul className="grid md:grid-cols-2 gap-4">
          <li className="rounded border border-white/10 bg-white/5 p-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl" aria-hidden="true">🏆</span>
              <div>
                <h3 className="font-bold">
                  {t("Innovate Award #1", "创新奖 第一名")}
                </h3>
                <p className="text-sm text-white/80 mt-1">
                  {t(
                    "FIRST Tech Challenge World Robot Contest Championships 2025 China Off-Season Event",
                    "FIRST 科技挑战赛 世界机器人大会锦标赛 2025 中国休赛期赛事"
                  )}{" "}
                  <span className="text-white/60">(2025)</span>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>

      {/* Competition Results: Simple OPR bar chart substitute */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-orange-400">
          {t("Competition Results", "比赛成绩")}
        </h2>
        <div className="rounded border border-white/10 bg-white/5 p-4">
          <div className="sr-only">
            <h3>OPR Data Table</h3>
            <table>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>OPR Value</th>
                </tr>
              </thead>
              <tbody>
                {OPR_DATA.map((d, i) => (
                  <tr key={i}>
                    <td>{d.label}</td>
                    <td>{d.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {OPR_DATA.map((d, i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className="w-8 md:w-10 bg-tiffany-300 rounded"
                  style={{ height: `${Math.max(8, d.value * 4)}px` }}
                  title={`${d.label}: ${d.value}`}
                  role="img"
                  aria-hidden="true"
                />
                <div className="mt-2 text-xs text-white/80">{d.label}</div>
                <div className="sr-only">Value: {d.value}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-white/60 mt-3">
            {t("OPR improvement over events (illustrative)", "各赛事 OPR 提升（示意）")}
          </p>
        </div>
      </section>

      {/* Technical Milestones */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-orange-400">
          {t("Technical Milestones", "技术里程碑")}
        </h2>
        <ul className="grid md:grid-cols-3 gap-4">
          {milestones.map((m, i) => (
            <li key={i} className="rounded border border-white/10 bg-white/5 p-4 text-sm">
              {m}
            </li>
          ))}
        </ul>
      </section>

      {/* Community Impact */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-orange-400">
          {t("Community Impact", "社区影响")}
        </h2>
        <ul className="grid md:grid-cols-3 gap-4">
          {community.map((c, i) => (
            <li key={i} className="rounded border border-white/10 bg-white/5 p-4 text-sm">
              {c}
            </li>
          ))}
        </ul>
      </section>

      {/* Displacement + reflection applied to the whole page content */}
      <section className="mt-24 relative">
        {/* Reflection container with SVG filter fed by R3F canvas */}
        <div
          id="reflection-container"
          className="opacity-30 pointer-events-none py-4"
          style={{ filter: "url(#reflection-filter)", willChange: "filter" }}
        >
          <div className="scale-y-[-1] blur-[2px]">
            {/* Mirror the entire page content: header + sections above */}
            <header className="mb-10">
              <h1 className="text-4xl md:text-6xl font-extrabold">{t("Achievements", "成就")}</h1>
              <p className="text-white/80 mt-3">
                {t(
                  "Breaking boundaries with measurable progress: reliability, rankings, and outreach impact.",
                  "以数据见证突破：可靠性、排名提升与外联影响。"
                )}
              </p>
            </header>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-orange-400">
                {t("Recent Awards", "近期奖项")}
              </h2>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="rounded border border-white/10 bg-white/5 p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl" aria-hidden="true">🏆</span>
                    <div>
                      <h3 className="font-bold">
                        {t("Innovate Award #1", "创新奖 第一名")}
                      </h3>
                      <p className="text-sm text-white/80 mt-1">
                        {t(
                          "FIRST Tech Challenge World Robot Contest Championships 2025 China Off-Season Event",
                          "FIRST 科技挑战赛 世界机器人大会锦标赛 2025 中国休赛期赛事"
                        )}{" "}
                        <span className="text-white/60">(2025)</span>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-orange-400">
                {t("Competition Results", "比赛成绩")}
              </h2>
              <div className="rounded border border-white/10 bg-white/5 p-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {OPR_DATA.map((d, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div
                        className="w-8 md:w-10 bg-tiffany-300 rounded"
                        style={{ height: `${Math.max(8, d.value * 4)}px` }}
                        title={`${d.label}: ${d.value}`}
                        role="img"
                        aria-hidden="true"
                      />
                      <div className="mt-2 text-xs text-white/80">{d.label}</div>
                      <div className="sr-only">Value: {d.value}</div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-white/60 mt-3">
                  {t("OPR improvement over events (illustrative)", "各赛事 OPR 提升（示意）")}
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-orange-400">
                {t("Technical Milestones", "技术里程碑")}
              </h2>
              <ul className="grid md:grid-cols-3 gap-4">
                {milestones.map((m, i) => (
                  <li key={i} className="rounded border border-white/10 bg-white/5 p-4 text-sm">
                    {m}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-4 text-orange-400">
                {t("Community Impact", "社区影响")}
              </h2>
              <ul className="grid md:grid-cols-3 gap-4">
                {community.map((c, i) => (
                  <li key={i} className="rounded border border-white/10 bg-white/5 p-4 text-sm">
                    {c}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* Invisible canvas writing to the displacement map used by the filter above */}
        {/* <SvgDisplacementForm /> */}
      </section>

      {/* SVG Filter (placed once at page root) */}
      <svg width="0" height="0" aria-hidden="true">
        <filter id="reflection-filter">
          <feImage id="displacementMapImage" result="displacementMap" />
          <feDisplacementMap
            scale="100"
            in="SourceGraphic"
            in2="displacementMap"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
    </main>
  )
}
