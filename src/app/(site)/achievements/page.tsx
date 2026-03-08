"use client"

import { useAppStore } from "~/context/use-app-store"

const WORLD_COMPARISON_DATA = [
  {
    label: {
      en: "Total NP",
      zh: "总 NP"
    },
    last: {
      rank: 3499,
      percentile: 54.21
    },
    current: {
      rank: 180,
      percentile: 97.74
    }
  },
  {
    label: {
      en: "Auto",
      zh: "自动阶段"
    },
    last: {
      rank: 2160,
      percentile: 71.74
    },
    current: {
      rank: 2438,
      percentile: 69.21
    }
  },
  {
    label: {
      en: "Teleop",
      zh: "遥控阶段"
    },
    last: {
      rank: 4081,
      percentile: 46.6
    },
    current: {
      rank: 53,
      percentile: 99.34
    }
  },
  {
    label: {
      en: "Endgame",
      zh: "终局阶段"
    },
    last: {
      rank: 3408,
      percentile: 55.41
    },
    current: {
      rank: 2175,
      percentile: 72.53
    }
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

  const worldComparisonRows = WORLD_COMPARISON_DATA.map((d) => {
    const rankImprovementPercent = ((d.last.rank - d.current.rank) / d.last.rank) * 100
    const percentileDelta = d.current.percentile - d.last.percentile
    return {
      ...d,
      rankImprovementPercent,
      percentileDelta
    }
  })

  const maxRankImprovement = Math.max(
    ...worldComparisonRows.map((d) => Math.abs(d.rankImprovementPercent)),
    1
  )
  const maxPercentileDelta = Math.max(
    ...worldComparisonRows.map((d) => Math.abs(d.percentileDelta)),
    1
  )
  const percentileChartWidth = 640
  const rankChartWidth = 640
  const chartHeight = 220
  const chartPadding = { top: 16, right: 16, bottom: 34, left: 40 }
  const chartInnerWidth = percentileChartWidth - chartPadding.left - chartPadding.right
  const chartInnerHeight = chartHeight - chartPadding.top - chartPadding.bottom
  const rankMax = Math.max(
    ...worldComparisonRows.flatMap((d) => [d.last.rank, d.current.rank]),
    1
  )
  const rankMin = Math.min(
    ...worldComparisonRows.flatMap((d) => [d.last.rank, d.current.rank]),
    1
  )
  const xStep =
    worldComparisonRows.length > 1 ? chartInnerWidth / (worldComparisonRows.length - 1) : 0
  const getX = (index: number) => chartPadding.left + index * xStep
  const getPercentileY = (value: number) =>
    chartPadding.top + ((100 - value) / 100) * chartInnerHeight
  const getRankY = (value: number) => {
    if (rankMax === rankMin) {
      return chartPadding.top + chartInnerHeight / 2
    }
    return (
      chartPadding.top + ((value - rankMin) / (rankMax - rankMin)) * chartInnerHeight
    )
  }
  const percentileLastPoints = worldComparisonRows
    .map((d, i) => `${getX(i)},${getPercentileY(d.last.percentile)}`)
    .join(" ")
  const percentileCurrentPoints = worldComparisonRows
    .map((d, i) => `${getX(i)},${getPercentileY(d.current.percentile)}`)
    .join(" ")
  const rankLastPoints = worldComparisonRows
    .map((d, i) => `${getX(i)},${getRankY(d.last.rank)}`)
    .join(" ")
  const rankCurrentPoints = worldComparisonRows
    .map((d, i) => `${getX(i)},${getRankY(d.current.rank)}`)
    .join(" ")

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
          {t("World Ranking Improvement", "全球排名提升")}
        </h2>

        <div className="rounded border border-white/10 bg-white/5 p-4">
          <div className="sr-only">
            <h3>World Ranking Comparison</h3>
            <table>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Last Season Rank</th>
                  <th>This Season Rank</th>
                  <th>Last Season Percentile</th>
                  <th>This Season Percentile</th>
                </tr>
              </thead>
              <tbody>
                {worldComparisonRows.map((d, i) => (
                  <tr key={i}>
                    <td>{lang === "en" ? d.label.en : d.label.zh}</td>
                    <td>#{d.last.rank}</td>
                    <td>#{d.current.rank}</td>
                    <td>{d.last.percentile.toFixed(2)}%</td>
                    <td>{d.current.percentile.toFixed(2)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mb-4 text-sm text-white/75">
            {t(
              "Last season (2024-2025) vs this season (2025-2026), based on world rank/percentile snapshots.",
              "基于全球排名/百分位快照，对比上赛季（2024-2025）与本赛季（2025-2026）。"
            )}
          </p>

          <div className="mb-5 grid gap-4 md:grid-cols-2">
            <div className="rounded border border-white/10 bg-black/20 p-3">
              <p className="mb-2 text-sm font-semibold text-white/90">
                {t("Percentile Trend (Line)", "百分位趋势（折线）")}
              </p>
              <svg
                viewBox={`0 0 ${percentileChartWidth} ${chartHeight}`}
                className="h-auto w-full"
                role="img"
                aria-label={
                  lang === "en"
                    ? "Line chart comparing last season and this season percentile by metric"
                    : "按指标对比上赛季与本赛季百分位的折线图"
                }
              >
                <line
                  x1={chartPadding.left}
                  y1={chartPadding.top}
                  x2={chartPadding.left}
                  y2={chartHeight - chartPadding.bottom}
                  stroke="rgba(255,255,255,0.25)"
                />
                <line
                  x1={chartPadding.left}
                  y1={chartHeight - chartPadding.bottom}
                  x2={percentileChartWidth - chartPadding.right}
                  y2={chartHeight - chartPadding.bottom}
                  stroke="rgba(255,255,255,0.25)"
                />

                <polyline
                  fill="none"
                  stroke="rgba(255,255,255,0.7)"
                  strokeWidth="2.5"
                  points={percentileLastPoints}
                />
                <polyline
                  fill="none"
                  stroke="rgb(94 234 212)"
                  strokeWidth="2.5"
                  points={percentileCurrentPoints}
                />

                {worldComparisonRows.map((d, i) => (
                  <g key={`percentile-point-${i}`}>
                    <circle
                      cx={getX(i)}
                      cy={getPercentileY(d.last.percentile)}
                      r="4"
                      fill="rgba(255,255,255,0.9)"
                    />
                    <circle
                      cx={getX(i)}
                      cy={getPercentileY(d.current.percentile)}
                      r="4"
                      fill="rgb(94 234 212)"
                    />
                    <text
                      x={getX(i)}
                      y={chartHeight - 10}
                      textAnchor="middle"
                      fontSize="10"
                      fill="rgba(255,255,255,0.75)"
                    >
                      {lang === "en" ? d.label.en : d.label.zh}
                    </text>
                  </g>
                ))}
              </svg>
              <div className="mt-2 flex gap-4 text-[11px] text-white/70">
                <span>{t("White = Last season", "白色 = 上赛季")}</span>
                <span className="text-tiffany-200">
                  {t("Tiffany = This season", "青色 = 本赛季")}
                </span>
              </div>
            </div>

            <div className="rounded border border-white/10 bg-black/20 p-3">
              <p className="mb-2 text-sm font-semibold text-white/90">
                {t("World Rank Trend (Line)", "全球排名趋势（折线）")}
              </p>
              <svg
                viewBox={`0 0 ${rankChartWidth} ${chartHeight}`}
                className="h-auto w-full"
                role="img"
                aria-label={
                  lang === "en"
                    ? "Line chart comparing last season and this season rank by metric"
                    : "按指标对比上赛季与本赛季排名的折线图"
                }
              >
                <line
                  x1={chartPadding.left}
                  y1={chartPadding.top}
                  x2={chartPadding.left}
                  y2={chartHeight - chartPadding.bottom}
                  stroke="rgba(255,255,255,0.25)"
                />
                <line
                  x1={chartPadding.left}
                  y1={chartHeight - chartPadding.bottom}
                  x2={rankChartWidth - chartPadding.right}
                  y2={chartHeight - chartPadding.bottom}
                  stroke="rgba(255,255,255,0.25)"
                />

                <polyline
                  fill="none"
                  stroke="rgba(255,255,255,0.7)"
                  strokeWidth="2.5"
                  points={rankLastPoints}
                />
                <polyline
                  fill="none"
                  stroke="rgb(94 234 212)"
                  strokeWidth="2.5"
                  points={rankCurrentPoints}
                />

                {worldComparisonRows.map((d, i) => (
                  <g key={`rank-point-${i}`}>
                    <circle
                      cx={getX(i)}
                      cy={getRankY(d.last.rank)}
                      r="4"
                      fill="rgba(255,255,255,0.9)"
                    />
                    <circle
                      cx={getX(i)}
                      cy={getRankY(d.current.rank)}
                      r="4"
                      fill="rgb(94 234 212)"
                    />
                    <text
                      x={getX(i)}
                      y={chartHeight - 10}
                      textAnchor="middle"
                      fontSize="10"
                      fill="rgba(255,255,255,0.75)"
                    >
                      {lang === "en" ? d.label.en : d.label.zh}
                    </text>
                  </g>
                ))}
              </svg>
              <div className="mt-2 flex gap-4 text-[11px] text-white/70">
                <span>{t("White = Last season", "白色 = 上赛季")}</span>
                <span className="text-tiffany-200">
                  {t("Tiffany = This season", "青色 = 本赛季")}
                </span>
              </div>
              <p className="mt-1 text-[11px] text-white/60">
                {t("Lower is better for rank.", "排名数值越低越好。")}
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {worldComparisonRows.map((d, i) => (
              <div key={i} className="rounded border border-white/10 bg-white/5 p-3">
                <div className="mb-2 flex items-center justify-between">
                  <p className="font-semibold">{lang === "en" ? d.label.en : d.label.zh}</p>
                  <p className="text-xs text-white/70">
                    {t("Last → This", "上赛季 → 本赛季")}
                  </p>
                </div>

                <p className="text-xs text-white/80">
                  {t("Rank", "排名")}: #{d.last.rank} → #{d.current.rank}
                </p>
                <p className="text-xs text-white/80">
                  {t("Percentile", "百分位")}: {d.last.percentile.toFixed(2)}% →{" "}
                  {d.current.percentile.toFixed(2)}%
                </p>

                <div className="mt-3 space-y-2">
                  <div>
                    <div className="mb-1 flex items-center justify-between text-[11px] text-white/70">
                      <span>{t("Rank improvement %", "排名提升百分比")}</span>
                      <span
                        className={
                          d.rankImprovementPercent >= 0
                            ? "font-semibold text-tiffany-200"
                            : "font-semibold text-orange-300"
                        }
                      >
                        {d.rankImprovementPercent >= 0 ? "+" : ""}
                        {d.rankImprovementPercent.toFixed(2)}%
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded bg-white/10">
                      <div
                        className={
                          d.rankImprovementPercent >= 0
                            ? "h-2 rounded bg-tiffany-300"
                            : "h-2 rounded bg-orange-300"
                        }
                        style={{
                          width: `${Math.max(
                            4,
                            (Math.abs(d.rankImprovementPercent) / maxRankImprovement) * 100
                          )}%`
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="mb-1 flex items-center justify-between text-[11px] text-white/70">
                      <span>{t("Percentile delta", "百分位变化")}</span>
                      <span
                        className={
                          d.percentileDelta >= 0
                            ? "font-semibold text-tiffany-200"
                            : "font-semibold text-orange-300"
                        }
                      >
                        {d.percentileDelta >= 0 ? "+" : ""}
                        {d.percentileDelta.toFixed(2)}
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded bg-white/10">
                      <div
                        className={
                          d.percentileDelta >= 0
                            ? "h-2 rounded bg-tiffany-300"
                            : "h-2 rounded bg-orange-300"
                        }
                        style={{
                          width: `${Math.max(
                            4,
                            (Math.abs(d.percentileDelta) / maxPercentileDelta) * 100
                          )}%`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-3 text-sm md:grid-cols-2">
            <div className="rounded border border-white/10 bg-white/5 p-3">
              <p className="text-white/60">
                {t("This season peak (global, not current)", "本赛季峰值（全球，非当前）")}
              </p>
              <p className="text-xl font-bold text-tiffany-200">
                {t("Overall Robot Rank: #20", "机器人综合排名：#20")}
              </p>
            </div>
            <div className="rounded border border-white/10 bg-white/5 p-3">
              <p className="text-white/60">
                {t("This season peak (global, not current)", "本赛季峰值（全球，非当前）")}
              </p>
              <p className="text-xl font-bold text-tiffany-200">
                {t("Teleop Rank: #3", "Teleop 排名：#3")}
              </p>
            </div>
          </div>

          <p className="mt-3 text-xs text-white/60">
            {t(
              "Comparison uses your provided last-season and this-season world snapshots. #20 overall and #3 teleop are season peaks, not current standing.",
              "对比使用你提供的上赛季与本赛季全球快照数据；综合 #20 与 Teleop #3 为赛季峰值，并非当前实时排名。"
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
