"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useAppStore } from "~/context/use-app-store"

export default function HomePage() {
  const { lang } = useAppStore()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const t = (en: string, zh: string) => (lang === "en" ? en : zh)

  const stats = [
    { en: "Robot Iterations This Season", zh: "本赛季机器人迭代", value: "4" },
    { en: "Scoring Accuracy", zh: "得分准确率", value: "91%" },
    { en: "People Reached Through Outreach", zh: "科普影响人数", value: "300+" },
    { en: "New Team Members Trained", zh: "新成员培训人数", value: "12" }
  ]

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
                src="/images/robot-silhouette.png"
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
                {t("Making Waves in FIRST Tech Challenge", "在 FIRST 科技挑战赛中掀起波澜")}
              </span>
            </h1>
<p className="text-lg text-white/80">
  {t(
    "Breaking boundaries as a rookie-season FTC team: bold robot design, software quality, and meaningful outreach.",
    "我们的2024-2025 新手赛季，用一句话概括就是：突破界限——大胆的机器人设计、追求极致的软件质量，以及有意义的外联。"
  )}
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
              src="/images/robot-silhouette.png"
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
          {stats.map((s, i) => (
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
        <div className="rounded-lg border border-white/10 bg-white/5 p-6">
          <h3 className="font-mono text-orange-400 mb-2">
            {t("Technical Excellence", "技术卓越")}
          </h3>
<ul className="list-disc list-inside text-sm text-white/85 space-y-1">
  <li>{t("AI vision (Limelight 3A) ~92% success; end-to-end closed-loop grab sequence", "AI 视觉（Limelight 3A）约 92% 成功率；手动阶段一键闭环抓取序列")}</li>
  <li>{t("KoalaLog: open-source telemetry with AdvantageScope 3D replay", "KoalaLog：开源遥测，支持 AdvantageScope 3D 回放")}</li>
  <li>{t("Mechanical innovations: CV4B grabber, PTO gear-ratio switching, modular design", "机械创新：CV4B 抓取、PTO 齿比切换、模块化设计")}</li>
</ul>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-6">
          <h3 className="font-mono text-orange-400 mb-2">
            {t("Global Impact", "全球影响")}
          </h3>
<ul className="list-disc list-inside text-sm text-white/85 space-y-1">
  <li>{t("Active on international Discord—1,000+ messages; only China-based team consistently helping rookies", "活跃于国际 Discord——累计 1000+ 条消息；中国区唯一长期活跃答疑的新队")}</li>
  <li>{t("Promoted FIRST via school CS/Math week, exhibitions, and workshops", "通过学校计算机/数学周、展演和工作坊推广 FIRST")}</li>
  <li>{t("Open-source tools and docs for the FTC community", "面向 FTC 社区的开源工具与文档")}</li>
</ul>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-6">
          <h3 className="font-mono text-orange-400 mb-2">
            {t("Growth & Potential", "成长与潜力")}
          </h3>
<ul className="list-disc list-inside text-sm text-white/85 space-y-1">
  <li>{t("Grew from 3 to 15 members; trained 12 new teammates", "从 3 人成长至 15 人；培养训练 12 位新队员")}</li>
  <li>{t("Established school robotics club with funding", "创建学校机器人社团并获得资金支持")}</li>
  <li>{t("World Top 250 autonomous; 4 robot generations in one season", "自主世界前 250；单赛季完成 4 代机器人")}</li>
</ul>
        </div>
      </section>
    </main>
  )
}
