"use client"

import React from "react"
import Waves from "~/src/Waves/Waves"
import { useAppStore } from "~/context/use-app-store"
import dynamic from "next/dynamic"

const Viewer = dynamic(async () => {
  // Import from the colocated viewer next to this page (no extension to satisfy TS config)
  const mod = await import("./viewer")
  return mod.Viewer
}, { ssr: false }) as React.ComponentType<{ src: string }>

export default function RobotPage() {
  const { lang } = useAppStore()
  const t = (en: string, zh: string) => (lang === "en" ? en : zh)

  return (
    <main className="container mx-auto px-4 py-10 text-white space-y-10">
      {/* Waves background limited to this main section */}
      <div className="relative min-h-[320px]">
        {/* Absolutely-positioned canvas needs a positioned ancestor and explicit height */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <Waves
            lineColor="#fff"
            backgroundColor="rgba(255, 255, 255, 0.06)"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
            className="h-full w-full"
          />
        </div>
      </div>
      <header>
        <h1 className="text-4xl md:text-6xl font-extrabold">{t("Our Robot", "我们的机器人")}</h1>
        <p className="text-white/80 mt-3">
          {t("Technical showcase, evolution, and key innovations.", "技术展示、迭代演进与核心创新。")}
        </p>
      </header>

      {/* 3D Viewer */}
      <section className="rounded border border-white/10 bg-white/5">
        <div className="p-3 border-b border-white/10 text-sm text-white/80">
          {t("Interactive 3D Model Viewer", "交互式 3D 模型查看器")}
        </div>
        <div className="h-[420px] md:h-[560px]">
          <Viewer src="/models/tri.glb" />
        </div>
        <p className="p-3 text-xs text-white/60">
          {t("Use mouse/touch to rotate, zoom, and pan.", "使用鼠标/触控旋转、缩放与平移。")}
        </p>
      </section>

      {/* Innovations */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-orange-400">{t("Key Innovations", "关键创新")}</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <article className="rounded border border-white/10 bg-white/5 p-4">
            <h3 className="font-mono text-tiffany-300 mb-2">CV4B {t("Grabber", "抓取机构")}</h3>
<p className="text-sm text-white/80">
  {t(
    "Coaxial Virtual Four-Bar (CV4B): dead/live coaxial shafts decouple claw pitch from arm motion for parallel grasping with lower torque and higher speed.",
    "同轴虚拟四连杆（CV4B）：通过死轴/活轴同轴分离爪子俯仰与手臂运动，实现平行抓取，降低扭矩需求并提升速度。"
  )}
</p>
<p className="text-xs text-white/60 mt-2">
  {t("Automation: Limelight 3A + color sensor enable closed-loop grabbing during TeleOp.", "自动化：Limelight 3A + 颜色传感器，在手动阶段实现闭环抓取。")}
</p>
          </article>

          <article className="rounded border border-white/10 bg-white/5 p-4">
            <h3 className="font-mono text-tiffany-300 mb-2">PTO {t("Power Take-Off", "动力分配")}</h3>
<p className="text-sm text-white/80">
  {t(
    "Servo-shifted PTO uses 20° pressure-angle self-locking to route drivetrain torque for hanging without sacrificing elevator speed.",
    "舵机切换 PTO，利用 20° 压力角实现自锁，将底盘扭矩切换用于悬挂，同时不牺牲滑轨速度。"
  )}
</p>
<p className="text-xs text-white/60 mt-2">
  {t("Measured output ~5.25 N·m → ~154 N at 34 mm arm; meets 12 kg load with ~3.6× safety.", "测得输出约 5.25 N·m → 臂长 34 mm 约 154 N；满足 12 kg 载荷并具 ~3.6× 安全系数。")}
</p>
          </article>

          <article className="rounded border border-white/10 bg-white/5 p-4">
            <h3 className="font-mono text-tiffany-300 mb-2">AI {t("Vision System", "视觉系统")}</h3>
<p className="text-sm text-white/80">
  {t(
    "Neural network (5000+ labeled images) on Limelight 3A for multi-class detection; LUT mapping from (tx, ty) → (dx, dy) for precise approach.",
    "在 Limelight 3A 上部署 5000+ 标注图像训练的神经网络进行多类检测；通过 LUT 将 (tx, ty) 映射到 (dx, dy)，实现精确接近。"
  )}
</p>
<p className="text-xs text-white/60 mt-2">
  {t("Average alignment ~0.5 s; ~92% grasp success in tests.", "平均对准约 0.5 秒；测试中抓取成功率约 92%。")}
</p>
          </article>

          <article className="rounded border border-white/10 bg-white/5 p-4">
            <h3 className="font-mono text-tiffany-300 mb-2">KoalaLog {t("Telemetry", "遥测")}</h3>
<p className="text-sm text-white/80">
  {t(
    "Open-source logging with auto-capture and FTC Dashboard streaming; exports to AdvantageScope for 3D replay and deep diagnostics.",
    "开源记录系统，自动采集并可向 FTC Dashboard 实时流传；导出至 AdvantageScope 进行 3D 回放与深度诊断。"
  )}
</p>
<p className="text-xs text-white/60 mt-2">
  {t("Reduces tuning cycles from many runs → single run with full telemetry.", "将多次调试缩减为一次完整遥测的回放分析。")}
</p>
          </article>
        </div>
      </section>
    </main>
  )
}
