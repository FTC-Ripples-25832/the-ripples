"use client"

import React from "react"
import Link from "next/link"
import { useAppStore } from "~/context/use-app-store"

/* small note: don't remove my commments */
/**
 * small note: don't remove my commments
 * NOTE: Temporarily mount this page at /(site)/resources to avoid clashing with /resources.
 * We also export a Route Segment Config to explicitly segment this as a separate group.
 */
export default function ResourcesPage() {
  const { lang } = useAppStore()
  const t = (en: string, zh: string) => (lang === "en" ? en : zh)

  return (
    <main className="container mx-auto px-4 py-10 text-white space-y-10">
      <header>
        {/* This route lives under /(site)/resources to avoid clashing with existing /resources route */}
        <h1 className="text-4xl md:text-6xl font-extrabold">{t("Resources", "资源")}</h1>
        <p className="text-white/80 mt-3">
          {t("Open-source tools, documentation, and templates for FTC teams.", "面向 FTC 团队的开源工具、文档与模板。")}
        </p>
      </header>

      {/* Open Source Contributions */}
      <section>
        <h2 className="text-2xl font-bold text-orange-400 mb-4">{t("Open Source Contributions", "开源贡献")}</h2>
        <ul className="grid md:grid-cols-3 gap-4">
          <li className="rounded border border-white/10 bg-white/5 p-4">
            <h3 className="font-mono text-tiffany-300">{t("KoalaLog Telemetry", "KoalaLog 遥测")}</h3>
<p className="text-sm text-white/80 mt-1">
  {t(
    "Auto-capture telemetry, stream to FTC Dashboard, and export for AdvantageScope 3D replay.",
    "自动采集遥测，支持流向 FTC Dashboard，并导出至 AdvantageScope 进行 3D 回放。"
  )}
</p>
            <div className="flex gap-3 mt-3 text-sm">
              <a href="#" className="underline hover:opacity-80">{t("Docs", "文档")}</a>
              <a href="#" className="underline hover:opacity-80">{t("Download", "下载")}</a>
            </div>
          </li>
          <li className="rounded border border-white/10 bg-white/5 p-4">
            <h3 className="font-mono text-tiffany-300">{t("CAD Templates", "CAD 模板")}</h3>
<p className="text-sm text-white/80 mt-1">
  {t(
    "Starter assemblies, part libraries, and CV4B/PTO reference mechanisms to accelerate iteration.",
    "起始装配、零件库，以及 CV4B/PTO 参考机构，加速迭代。"
  )}
</p>
            <div className="flex gap-3 mt-3 text-sm">
              <a href="#" className="underline hover:opacity-80">{t("Browse", "浏览")}</a>
              <a href="#" className="underline hover:opacity-80">{t("Download", "下载")}</a>
            </div>
          </li>
          <li className="rounded border border-white/10 bg-white/5 p-4">
            <h3 className="font-mono text-tiffany-300">{t("Code Examples", "代码示例")}</h3>
<p className="text-sm text-white/80 mt-1">
  {t(
    "Command-based architecture, multi-sensor fusion, AI vision with LUT mapping examples.",
    "基于命令的架构、多传感器融合、AI 视觉与 LUT 映射示例。"
  )}
</p>
            <div className="flex gap-3 mt-3 text-sm">
              <a href="#" className="underline hover:opacity-80">{t("Repository", "仓库")}</a>
              <a href="#" className="underline hover:opacity-80">{t("Tutorials", "教程")}</a>
            </div>
          </li>
        </ul>
      </section>

      {/* Educational Content */}
      <section>
        <h2 className="text-2xl font-bold text-orange-400 mb-4">{t("Educational Content", "教学内容")}</h2>
        <ul className="grid md:grid-cols-3 gap-4">
          <li className="rounded border border-white/10 bg-white/5 p-4">
            <h3 className="font-semibold">{t("Engineering Design Process (Waterfall)", "工程设计流程（瀑布式）")}</h3>
<p className="text-sm text-white/80 mt-1">
  {t(
    "Brainstorming/research → CAD+FEA → Manufacturing/assembly → Testing/feedback.",
    "头脑风暴与研究 → CAD + 有限元分析 → 制造与组装 → 测试与反馈。"
  )}
</p>
          </li>
          <li className="rounded border border-white/10 bg-white/5 p-4">
            <h3 className="font-semibold">{t("Technical Articles", "技术文章")}</h3>
            <p className="text-sm text-white/80 mt-1">
              {t("Deep dives on mechanisms, control, and software architecture.", "深入解析机构、控制与软件架构。")}
            </p>
          </li>
          <li className="rounded border border-white/10 bg-white/5 p-4">
            <h3 className="font-semibold">{t("Video Tutorials", "视频教程")}</h3>
            <p className="text-sm text-white/80 mt-1">
              {t("Step-by-step guides and walkthroughs.", "循序渐进的指导与演示。")}
            </p>
          </li>
        </ul>
      </section>

      {/* Templates & Tools */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-orange-400 mb-4">{t("Templates & Tools", "模板与工具")}</h2>
        <ul className="grid md:grid-cols-3 gap-4">
          <li className="rounded border border-white/10 bg-white/5 p-4">
            <h3 className="font-semibold">{t("Engineering Notebook", "工程笔记模板")}</h3>
            <p className="text-sm text-white/80 mt-1">
              {t("Ready-to-use templates for season documentation.", "可直接使用的赛季文档模板。")}
            </p>
          </li>
          <li className="rounded border border-white/10 bg-white/5 p-4">
            <h3 className="font-semibold">{t("Project Management", "项目管理")}</h3>
            <p className="text-sm text-white/80 mt-1">
              {t("Boards and checklists for efficient collaboration.", "高效协作的看板与清单。")}
            </p>
          </li>
          <li className="rounded border border-white/10 bg-white/5 p-4">
            <h3 className="font-semibold">{t("Competition Prep", "赛前准备")}</h3>
            <p className="text-sm text-white/80 mt-1">
              {t("Packing lists, inspection aids, and pit setup guides.", "打包清单、检录辅助与 Pit 搭建指南。")}
            </p>
          </li>
        </ul>
      </section>

      <footer className="text-sm text-white/60">
        {t("Looking for something specific? Contact us on the Contact page.", "寻找特定资源？请在“联系我们”页面与我们联系。")}
      </footer>
    </main>
  )
}
