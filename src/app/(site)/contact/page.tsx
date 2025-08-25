"use client"

import React from "react"

import { useAppStore } from "~/context/use-app-store"

export default function ContactPage() {
  const { lang } = useAppStore()
  const t = (en: string, zh: string) => (lang === "en" ? en : zh)

  // mailto helpers
  const mailto = (to: string, subject: string, body?: string) => {
    const q = new URLSearchParams()
    if (subject) q.set("subject", subject)
    if (body) q.set("body", body)
    const qs = q.toString()
    return `mailto:${to}${qs ? `?${qs}` : ""}`
  }

  return (
    <main className="container mx-auto px-4 py-10 text-white space-y-10">
      <header>
        <h1 className="text-4xl md:text-6xl font-extrabold">
          {t("Contact Us", "联系我们")}
        </h1>
        <p className="text-white/80 mt-3">
          {t(
            "Get in touch for sponsorships, mentorship, or to book a demonstration.",
            "赞助、导师合作或预约演示，欢迎联系。"
          )}
        </p>
      </header>

      {/* Quick contacts */}
      <section className="grid md:grid-cols-3 gap-4">
        <a
          className="rounded border border-white/20 bg-white/5 p-4 hover:border-white/50 transition"
          href={mailto(
            "ripples25832@gmail.com",
            t(
              "General Inquiry - Team 25832 Ripples",
              "一般咨询 - 25832 Ripples 团队"
            )
          )}
        >
          <h3 className="font-mono text-tiffany-300 mb-1">
            {t("General Contact", "一般联系")}
          </h3>
          <p className="text-sm text-white/80">contact@team25832ripples.org</p>
        </a>
        <a
          className="rounded border border-white/20 bg-white/5 p-4 hover:border-white/50 transition"
          href={mailto(
            "ripples25832@gmail.com",
            t("Sponsorship Inquiry", "赞助咨询")
          )}
        >
          <h3 className="font-mono text-tiffany-300 mb-1">
            {t("Sponsorship", "赞助")}
          </h3>
          <p className="text-sm text-white/80">ripples25832@gmail.com</p>
        </a>
        <a
          className="rounded border border-white/20 bg-white/5 p-4 hover:border-white/50 transition"
          href={mailto(
            "ripples25832@gmail.com",
            t("Mentorship Application", "导师申请")
          )}
        >
          <h3 className="font-mono text-tiffany-300 mb-1">
            {t("Mentorship", "导师")}
          </h3>
          <p className="text-sm text-white/80">ripples25832@gmail.com</p>
        </a>
      </section>

      {/* Mailto forms (no backend) */}
      <section className="grid md:grid-cols-2 gap-6">
        {/* Exhibition booking */}
        <div className="rounded border border-white/10 bg-white/5 p-5">
          <h2 className="text-2xl font-bold text-orange-400">
            {t("Book a Demonstration", "预约演示")}
          </h2>
          <p className="text-sm text-white/80 mt-2">
            {t(
              "Fill the fields and click Send to open your email client.",
              "填写信息并点击发送，将打开您的邮箱客户端。"
            )}
          </p>
          <FormMailto
            to="partnerships@team25832ripples.org"
            subject={t(
              "Book a Demonstration - Team 25832 Ripples",
              "预约演示 - 25832 Ripples 团队"
            )}
            labels={{
              name: t("Your Name", "您的姓名"),
              org: t("Organization / School", "机构 / 学校"),
              date: t("Preferred Date(s)", "期望日期"),
              details: t("Event Details", "活动详情"),
              send: t("Send Email", "发送邮件")
            }}
            mailto={mailto}
          />
        </div>

        {/* Sponsorship inquiry */}
        <div className="rounded border border-white/10 bg-white/5 p-5">
          <h2 className="text-2xl font-bold text-orange-400">
            {t("Sponsorship Inquiry", "赞助咨询")}
          </h2>
          <p className="text-sm text-white/80 mt-2">
            {t(
              "Tell us about your goals and interests.",
              "请告诉我们您的目标与兴趣。"
            )}
          </p>
          <FormMailto
            to="sponsorship@team25832ripples.org"
            subject={t(
              "Sponsorship Inquiry - Team 25832 Ripples",
              "赞助咨询 - 25832 Ripples 团队"
            )}
            labels={{
              name: t("Your Name", "您的姓名"),
              org: t("Organization / Company", "机构 / 公司"),
              budget: t("Estimated Budget (optional)", "预算（可选）"),
              details: t("Notes", "备注"),
              send: t("Send Email", "发送邮件")
            }}
            mailto={mailto}
          />
        </div>
      </section>
    </main>
  )
}

type FormMailtoProps = {
  to: string
  subject: string
  labels: {
    name: string
    org?: string
    date?: string
    budget?: string
    details: string
    send: string
  }
}

function FormMailto({
  to,
  subject,
  labels,
  mailto
}: FormMailtoProps & {
  mailto?: (to: string, subject: string, body?: string) => string
}) {
  const [name, setName] = React.useState("")
  const [org, setOrg] = React.useState("")
  const [date, setDate] = React.useState("")
  const [budget, setBudget] = React.useState("")
  const [details, setDetails] = React.useState("")

  const href = React.useMemo(() => {
    const lines = [
      name ? `Name: ${name}` : "",
      org ? `Organization: ${org}` : "",
      date ? `Date(s): ${date}` : "",
      budget ? `Budget: ${budget}` : "",
      details ? `Details: ${details}` : ""
    ].filter(Boolean)
    const body = lines.join("\n")
    // prefer injected helper
    if (mailto) return mailto(to, subject, body)
    // fallback to local construction for safety
    const q = new URLSearchParams()
    if (subject) q.set("subject", subject)
    if (body) q.set("body", body)
    const qs = q.toString()
    return `mailto:${to}${qs ? `?${qs}` : ""}`
  }, [to, subject, name, org, date, budget, details, mailto])

  return (
    <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
      <div className="grid md:grid-cols-2 gap-3">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={labels.name}
          className="w-full rounded bg-black/40 border border-white/15 px-3 py-2 text-sm outline-none focus:border-white/40"
        />
        {labels.org !== undefined && (
          <input
            value={org}
            onChange={(e) => setOrg(e.target.value)}
            placeholder={labels.org}
            className="w-full rounded bg-black/40 border border-white/15 px-3 py-2 text-sm outline-none focus:border-white/40"
          />
        )}
      </div>
      {labels.date !== undefined && (
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder={labels.date}
          className="w-full rounded bg-black/40 border border-white/15 px-3 py-2 text-sm outline-none focus:border-white/40"
        />
      )}
      {labels.budget !== undefined && (
        <input
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder={labels.budget}
          className="w-full rounded bg-black/40 border border-white/15 px-3 py-2 text-sm outline-none focus:border-white/40"
        />
      )}
      <textarea
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        placeholder={labels.details}
        rows={5}
        className="w-full rounded bg-black/40 border border-white/15 px-3 py-2 text-sm outline-none focus:border-white/40"
      />
      <div className="pt-1">
        <a
          href={href}
          className="inline-block rounded border border-orange-500 bg-orange-500 text-black font-semibold px-4 py-2 hover:bg-orange-400 transition"
        >
          {labels.send}
        </a>
      </div>
    </form>
  )
}
