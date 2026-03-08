"use client"

import React from "react"

import { useAppStore } from "~/context/use-app-store"

export default function PartnershipsPage() {
  // Use global store so the header toggle updates immediately without refresh
  const { lang } = useAppStore()

  const t = (en: string, zh: string) => (lang === "en" ? en : zh)

  // Simple mailto helpers (placeholders per instruction)
  const mailto = (to: string, subject: string, body?: string) => {
    const q = new URLSearchParams()
    if (subject) q.set("subject", subject)
    if (body) q.set("body", body)
    const qs = q.toString()
    return `mailto:${to}${qs ? `?${qs}` : ""}`
  }

  return (
    <main className="container mx-auto px-4 py-10 text-white space-y-10">
      <header className="space-y-2">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          {t("Partnerships", "合作伙伴")}
        </h1>
        <p className="text-white/80">
          {t(
            "Partner with innovation to amplify STEM impact—exhibitions, documentation, and outreach to 300+ people.",
            "与创新同行，放大 STEM 影响力——展演、文档与外联，已触达 300+ 人。"
          )}
        </p>
      </header>

      {/* Sponsorship Opportunities */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-orange-400">
          {t("Sponsorship Opportunities", "赞助机会")}
        </h2>
        <ul className="grid md:grid-cols-3 gap-4">
          {[
            {
              tier: t("Supporter", "支持者"),
              value: t(
                "Logo on website and pit board; acknowledgment in resources.",
                "网站与 pit 展板展示 logo；资源页面致谢。"
              )
            },
            {
              tier: t("Partner", "合作伙伴"),
              value: t(
                "Logo, social media mentions, and event shout-outs; demo opportunities.",
                "Logo、社媒提及、活动鸣谢；活动演示机会。"
              )
            },
            {
              tier: t("Title Sponsor", "冠名赞助"),
              value: t(
                "Prominent logo placement, co-branded outreach, and on-site demos.",
                "显著 logo 露出、联合外联活动与现场演示。"
              )
            }
          ].map((s, i) => (
            <li
              key={i}
              className="rounded border border-white/10 bg-white/5 p-4"
            >
              <h3 className="font-mono text-tiffany-300">{s.tier}</h3>
              <p className="text-sm text-white/80 mt-1">{s.value}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Mentorship */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-orange-400">
          {t("Mentorship Program", "导师计划")}
        </h2>
        <p className="text-sm text-white/80">
          {t(
            "Seeking mentors for mechanical, software, and strategy. Join our mentor network.",
            "我们期待机械、软件与策略导师加入我们的导师网络。"
          )}
        </p>
      </section>

      {/* Exhibition Services */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-orange-400">
          {t("Exhibition Services", "科普展演")}
        </h2>
        <ul className="grid md:grid-cols-3 gap-4">
          {[
            t(
              "STEM education presentations (school CS/Math week)",
              "STEM 教育宣讲（校内计算机/数学周）"
            ),
            t(
              "Robot demonstrations and hands-on sessions",
              "机器人演示与互动体验"
            ),
            t(
              "Workshops on design, control, and AI vision",
              "设计、控制与 AI 视觉工作坊"
            )
          ].map((item, i) => (
            <li
              key={i}
              className="rounded border border-white/10 bg-white/5 p-4 text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* CTAs */}
      <section className="grid md:grid-cols-3 gap-4">
        <a
          className="rounded border border-orange-500 bg-orange-500 text-black font-semibold px-4 py-3 text-center hover:bg-orange-400 transition"
          rel="noopener"
          aria-label={t(
            "Contact us about sponsorship opportunities",
            "联系我们了解赞助机会"
          )}
          href={mailto(
            "partnerships@example.com",
            t(
              "Sponsorship Inquiry - Team 25832 Ripples",
              "赞助咨询 - 25832 Ripples 团队"
            ),
            t(
              "Hello Ripples,\n\nWe are interested in sponsorship opportunities.\n\nBest regards,",
              "你好 Ripples，\n\n我们对赞助机会感兴趣，请联系我们。\n\n谢谢，"
            )
          )}
        >
          {t("Sponsor Us", "成为赞助商")}
        </a>
        <a
          className="rounded border border-white/20 px-4 py-3 text-center hover:border-white/50 transition"
          rel="noopener"
          aria-label={t(
            "Email us to apply as a mentor",
            "发送邮件申请成为导师"
          )}
          href={mailto(
            "partnerships@example.com",
            t(
              "Mentorship Application - Team 25832 Ripples",
              "导师申请 - 25832 Ripples 团队"
            ),
            t(
              "Hello Ripples,\n\nI would like to mentor your team (area: Mechanical/Software/Strategy).\n\nBest regards,",
              "你好 Ripples，\n\n我希望加入导师团队（方向：机械/软件/策略）。\n\n谢谢，"
            )
          )}
        >
          {t("Become a Mentor", "成为导师")}
        </a>
        <a
          className="rounded border border-white/20 px-4 py-3 text-center hover:border-white/50 transition"
          rel="noopener"
          aria-label={t(
            "Request a robot demonstration via email",
            "通过邮件预约机器人演示"
          )}
          href={mailto(
            "partnerships@example.com",
            t(
              "Book a Demonstration - Team 25832 Ripples",
              "预约演示 - 25832 Ripples 团队"
            ),
            t(
              "Hello Ripples,\n\nWe would like to book a robot demonstration/workshop.\n\nDate options:\nAudience:\nLocation:\n\nBest regards,",
              "你好 Ripples，\n\n我们希望预约机器人演示/工作坊。\n\n可选日期：\n受众：\n地点：\n\n谢谢，"
            )
          )}
        >
          {t("Book a Demonstration", "预约演示")}
        </a>
      </section>

      <footer className="text-sm text-white/60">
        {t(
          "Need a formal proposal? Email us for a sponsorship deck and collaboration options.",
          "需要正式方案？给我们发邮件获取赞助资料与合作方案。"
        )}
      </footer>
    </main>
  )
}
