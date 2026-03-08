"use client"

import { useAppStore } from "~/context/use-app-store"

const OPR_DATA = [
  {
    label: {
      en: "China Championship - Luban Division",
      zh: "中国锦标赛 - 鲁班组"
    },
    sublabel: {
      en: "Feb 2026 · npOPR",
      zh: "2026 年 2 月 · npOPR"
    },
    value: 50.66
  },
  {
    label: {
      en: "Beijing #2 Qualifier (Peak)",
      zh: "北京 #2 资格赛（峰值）"
    },
    sublabel: {
      en: "Dec 2025 · npOPR",
      zh: "2025 年 12 月 · npOPR"
    },
    value: 122.67
  }
]

export default function AchievementsPage() {
  const { lang } = useAppStore()
  const t = (en: string, zh: string) => (lang === "en" ? en : zh)

  const milestones = [
    t("4 robot generations in one season", "单赛季 4 次机器人迭代"),
    t(
      "~91% scoring accuracy across ~40 recorded sessions",
      "约 40 场记录中整体 ~91% 得分精准度"
    ),
    t("World Top 250 autonomous performance", "自主得分世界前 250")
  ]

  const community = [
    t(
      "300+ people reached through outreach and exhibitions",
      "通过外联与展演影响 300+ 人"
    ),
    t(
      "12 new members trained; school robotics club founded",
      "培训 12 位新成员；创建学校机器人社团"
    ),
    t(
      "Active international Discord presence (1,000+ messages)",
      "活跃于国际 Discord（累计 1000+ 条消息）"
    )
  ]

  const peakOpr = Math.max(...OPR_DATA.map((d) => d.value))
  const baseOpr = Math.min(...OPR_DATA.map((d) => d.value))
  const oprDelta = peakOpr - baseOpr

  const achievementSections = (
    <>
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold text-orange-400">
          {t("Recent Awards", "近期奖项")}
        </h2>

        <ul className="grid gap-4 md:grid-cols-2">
          <li className="rounded border border-white/10 bg-white/5 p-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl" aria-hidden="true">
                🏅
              </span>
              <div>
                <h3 className="font-bold">
                  {t(
                    "China FTC Beijing #2 Qualifier (2025-2026 DECODE)",
                    "中国 FTC 北京 #2 资格赛（2025-2026 DECODE）"
                  )}
                </h3>
                <p className="mt-1 text-sm text-white/75">
                  {t(
                    "Dec 20-21, 2025 · Beijing, China",
                    "2025 年 12 月 20-21 日 · 中国北京"
                  )}
                </p>
                <ul className="mt-3 space-y-1 text-sm text-white/85">
                  <li>{t("Qualified 1st Place (quals)", "资格赛排名第 1")}</li>
                  <li>
                    {t(
                      "Finalist Alliance Captain",
                      "决赛联盟队长（Finalist Alliance Captain）"
                    )}
                  </li>
                  <li>
                    {t(
                      "Inspire Award 2nd Place",
                      "Inspire Award 二等奖"
                    )}
                  </li>
                  <li>
                    {t(
                      "#3 Global Teleop and #20 overall robot ranking (season peak, not current)",
                      "全球 Teleop 第 3、机器人综合第 20（赛季峰值，非当前）"
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li className="rounded border border-white/10 bg-white/5 p-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl" aria-hidden="true">
                🏆
              </span>
              <div>
                <h3 className="font-bold">{t("Innovate Award #1", "创新奖 第一名")}</h3>
                <p className="mt-1 text-sm text-white/80">
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
        <h2 className="mb-4 text-2xl font-bold text-orange-400">
          {t("Competition Results", "比赛成绩")}
        </h2>

        <div className="rounded border border-white/10 bg-white/5 p-4">
          <div className="sr-only">
            <h3>npOPR Data Table</h3>
            <table>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>npOPR Value</th>
                </tr>
              </thead>
              <tbody>
                {OPR_DATA.map((d, i) => (
                  <tr key={i}>
                    <td>{lang === "en" ? d.label.en : d.label.zh}</td>
                    <td>{d.value.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
            {OPR_DATA.map((d, i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className="w-10 rounded bg-tiffany-300 md:w-12"
                  style={{ height: `${Math.max(16, d.value * 1.8)}px` }}
                  title={`${lang === "en" ? d.label.en : d.label.zh}: ${d.value.toFixed(2)}`}
                  role="img"
                  aria-hidden="true"
                />
                <div className="mt-2 text-center text-xs text-white/85">
                  {lang === "en" ? d.label.en : d.label.zh}
                </div>
                <div className="text-[11px] text-white/60">
                  {lang === "en" ? d.sublabel.en : d.sublabel.zh}
                </div>
                <div className="sr-only">Value: {d.value.toFixed(2)}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-3 text-sm md:grid-cols-3">
            <div className="rounded border border-white/10 bg-white/5 p-3">
              <p className="text-white/60">{t("Peak npOPR", "npOPR 峰值")}</p>
              <p className="text-xl font-bold text-tiffany-200">{peakOpr.toFixed(2)}</p>
            </div>
            <div className="rounded border border-white/10 bg-white/5 p-3">
              <p className="text-white/60">{t("Comparison Baseline", "对比基线")}</p>
              <p className="text-xl font-bold text-white">{baseOpr.toFixed(2)}</p>
            </div>
            <div className="rounded border border-white/10 bg-white/5 p-3">
              <p className="text-white/60">{t("Peak Delta", "峰值差值")}</p>
              <p className="text-xl font-bold text-orange-300">+{oprDelta.toFixed(2)}</p>
            </div>
          </div>

          <p className="mt-3 text-xs text-white/60">
            {t(
              "Performance comparison from published event data. Rankings listed above are season peaks, not current global standing.",
              "基于公开赛事数据的成绩对比。以上排名为赛季峰值，并非当前全球实时排名。"
            )}
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold text-orange-400">
          {t("Technical Milestones", "技术里程碑")}
        </h2>
        <ul className="grid gap-4 md:grid-cols-3">
          {milestones.map((m, i) => (
            <li
              key={i}
              className="rounded border border-white/10 bg-white/5 p-4 text-sm"
            >
              {m}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="mb-4 text-2xl font-bold text-orange-400">
          {t("Community Impact", "社区影响")}
        </h2>
        <ul className="grid gap-4 md:grid-cols-3">
          {community.map((c, i) => (
            <li
              key={i}
              className="rounded border border-white/10 bg-white/5 p-4 text-sm"
            >
              {c}
            </li>
          ))}
        </ul>
      </section>
    </>
  )

  return (
    <main className="container mx-auto px-4 py-10 text-white">
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold md:text-6xl">
          {t("Achievements", "成就")}
        </h1>
        <p className="mt-3 text-white/80">
          {t(
            "Breaking boundaries with measurable progress: reliability, rankings, and outreach impact.",
            "以数据见证突破：可靠性、排名提升与外联影响。"
          )}
        </p>
      </header>

      {achievementSections}

      <section className="relative mt-24">
        <div
          id="reflection-container"
          className="pointer-events-none py-4 opacity-30"
          style={{ filter: "url(#reflection-filter)", willChange: "filter" }}
        >
          <div className="scale-y-[-1] blur-[2px]">
            <header className="mb-10">
              <h1 className="text-4xl font-extrabold md:text-6xl">
                {t("Achievements", "成就")}
              </h1>
              <p className="mt-3 text-white/80">
                {t(
                  "Breaking boundaries with measurable progress: reliability, rankings, and outreach impact.",
                  "以数据见证突破：可靠性、排名提升与外联影响。"
                )}
              </p>
            </header>
            {achievementSections}
          </div>
        </div>
      </section>

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
