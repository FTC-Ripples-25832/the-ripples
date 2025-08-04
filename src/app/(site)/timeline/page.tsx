"use client"

import Image from "next/image"
import type React from "react"
import Link from "~/components/primitives/link"
import { useAppStore } from "~/context/use-app-store"

// Timeline data
const timelineEvents = [
  {
    date: { en: "March 2024", zh: "2024 年 3 月" },
    title: { en: "FIRST World Championship - Houston", zh: "FIRST 世界锦标赛 - 休斯敦" },
    type: "championship",
    description: {
      en: "Competing at the World Championship in Houston! Our team qualified through regional performance and we're excited to represent San Diego on the world stage.",
      zh: "前往休斯敦参加世界锦标赛！我们通过地区赛成绩获得资格，期待在世界舞台代表圣迭戈。"
    },
    image: "/images/timeline-1.jpg",
    status: "upcoming",
    location: { en: "Houston, TX", zh: "德州休斯敦" },
    achievement: { en: "World Championship Qualification", zh: "世界赛入围" }
  },
  {
    date: { en: "February 2024", zh: "2024 年 2 月" },
    title: { en: "Regional Championship Victory", zh: "地区赛总冠军" },
    type: "win",
    description: {
      en: "Champions at the San Diego Regional! Our alliance dominated the competition with our new autonomous routine and strategic alliance selections.",
      zh: "圣迭戈地区赛夺冠！我们的联盟凭借全新自动程序与出色的结盟策略主导比赛。"
    },
    image: "/images/timeline-2.jpg",
    status: "completed",
    location: { en: "San Diego, CA", zh: "加州圣迭戈" },
    achievement: { en: "Regional Champions + Design Award", zh: "地区冠军＋设计奖" }
  },
  {
    date: { en: "January 2024", zh: "2024 年 1 月" },
    title: { en: "Season Kickoff - CENTERSTAGE", zh: "新赛季发布 - CENTERSTAGE" },
    type: "event",
    description: {
      en: "Game reveal day! This year's challenge involves pixel placement and autonomous navigation. We're analyzing game strategy and beginning robot design.",
      zh: "赛题发布日！本赛季涉及像素放置与自动导航。我们正在分析策略并启动机器人设计。"
    },
    image: "/images/timeline-3.jpg",
    status: "completed",
    location: { en: "Virtual Event", zh: "线上活动" },
    achievement: { en: "Game Analysis Complete", zh: "赛题分析完成" }
  },
  {
    date: { en: "December 2023", zh: "2023 年 12 月" },
    title: { en: "Robot Redesign Complete", zh: "机器人重构完成" },
    type: "milestone",
    description: {
      en: "Major overhaul of our drivetrain and intake system. New mecanum wheel setup provides better maneuverability and our intake can handle multiple game elements.",
      zh: "全面升级传动与进料系统。新的麦克纳姆轮带来更强机动性，进料机构可处理多种赛件。"
    },
    image: "/images/timeline-4.jpg",
    status: "completed",
    location: { en: "Our Workshop", zh: "工作室" },
    achievement: { en: "Performance Improvement: +40%", zh: "性能提升：+40%" }
  },
  {
    date: { en: "November 2023", zh: "2023 年 11 月" },
    title: { en: "Qualifier Tournament #2", zh: "资格赛 #2" },
    type: "competition",
    description: {
      en: "Strong showing at our second qualifier. Finished 3rd overall and secured advancement to regionals. Our autonomous routine is now scoring consistently.",
      zh: "第二场资格赛表现稳定，总排名第 3，成功晋级地区赛。自动程序得分已趋于稳定。"
    },
    image: "/images/timeline-5.jpg",
    status: "completed",
    location: { en: "La Jolla, CA", zh: "加州拉荷亚" },
    achievement: { en: "3rd Place + Regional Advancement", zh: "季军＋晋级地区赛" }
  },
  {
    date: { en: "October 2023", zh: "2023 年 10 月" },
    title: { en: "First Competition of Season", zh: "赛季首战" },
    type: "competition",
    description: {
      en: "Debut of our new robot design. Some technical challenges but valuable learning experience. Team performed well under pressure and gained crucial match experience.",
      zh: "新机器人首次亮相。虽遇技术挑战，但收获宝贵经验；在压力下依然发挥稳定。"
    },
    image: "/images/timeline-6.jpg",
    status: "completed",
    location: { en: "San Diego, CA", zh: "加州圣迭戈" },
    achievement: { en: "Rookie Inspiration Award", zh: "新秀启发奖" }
  }
]

const upcomingEvents = [
  {
    date: "March 15-18, 2024",
    title: "FIRST World Championship",
    location: "Houston, TX",
    type: "Championship"
  },
  {
    date: "March 8, 2024",
    title: "Robot Shipping Deadline",
    location: "Team Workshop",
    type: "Deadline"
  },
  {
    date: "March 1, 2024",
    title: "Final Practice Session",
    location: "Team Workshop",
    type: "Practice"
  }
]

const seasonStats = [
  { label: { en: "Competitions", zh: "参赛次数" }, value: "6", description: { en: "Events Participated", zh: "参与赛事" } },
  { label: { en: "Wins", zh: "胜场" }, value: "15", description: { en: "Match Victories", zh: "比赛胜场" } },
  { label: { en: "Awards", zh: "奖项" }, value: "4", description: { en: "Total Awards Won", zh: "获奖总数" } },
  { label: { en: "Ranking", zh: "排名" }, value: "#2", description: { en: "Regional Ranking", zh: "地区排名" } }
]

const EventCard: React.FC<{ event: any }> = ({ event }) => {
  const { lang } = useAppStore()
  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "border-tiffany-300 bg-tiffany-300/10"
      case "completed":
        return "border-stone-700/30 bg-stone-800/20"
      default:
        return "border-stone-700/30 bg-stone-800/20"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "championship":
        return "🏆"
      case "win":
        return "🥇"
      case "competition":
        return "🤖"
      case "milestone":
        return "🔧"
      case "event":
        return "📅"
      default:
        return "📍"
    }
  }

  return (
    <div
      className={`rounded-lg border overflow-hidden ${getStatusColor(event.status)} hover:transform hover:scale-105 transition-all duration-300`}
    >
      <Image
        src={event.image}
        alt={event.title}
        width={600}
        height={192}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-tiffany-300 font-mono text-sm">
            {lang === "en" ? event.date.en : event.date.zh}
          </span>
          <span className="text-2xl">{getTypeIcon(event.type)}</span>
        </div>

        <h3 className="text-xl font-bold mb-3">{lang === "en" ? event.title.en : event.title.zh}</h3>
        <p className="text-gray-300 mb-4 leading-relaxed">
          {lang === "en" ? event.description.en : event.description.zh}
        </p>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">{lang === "en" ? "Location:" : "地点："}</span>
            <span className="font-mono">{lang === "en" ? event.location.en : event.location.zh}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">{lang === "en" ? "Achievement:" : "成就："}</span>
            <span className="font-mono text-tiffany-300">
              {lang === "en" ? event.achievement.en : event.achievement.zh}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

const TimelinePage: React.FC = () => {
  const { lang } = useAppStore()
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-10 md:py-14">
      {/* Page header */}
      <header className="mb-10 md:mb-14">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          <span className="italic text-tiffany-300">
            {lang === "en" ? "News" : "新闻"}
          </span>{" "}
          & {lang === "en" ? "Timeline" : "时间线"}
        </h1>
        <p className="mt-3 md:mt-4 max-w-2xl text-base md:text-lg text-white/80">
          {lang === "en"
            ? "Follow our journey through the season — competitions, milestones, and highlights from the team."
            : "关注我们整个赛季的故事——比赛、里程碑与高光时刻。"}
        </p>
      </header>

      {/* Current Season Stats */}
      <section className="mb-10 md:mb-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {seasonStats.map((stat, index) => (
            <div
              key={index}
              className="rounded border border-white/10 bg-white/5 p-4 text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-tiffany-300">{stat.value}</div>
              <div className="mt-1 text-sm md:text-base font-bold">{lang === "en" ? stat.label.en : stat.label.zh}</div>
              <div className="mt-0.5 text-xs text-white/60 font-mono">{lang === "en" ? stat.description.en : stat.description.zh}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="mb-10 md:mb-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {lang === "en" ? "Upcoming" : "即将到来"}{" "}
          <span className="italic text-tiffany-300">{lang === "en" ? "Events" : "活动"}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="rounded border border-white/10 bg-white/5 p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 rounded bg-tiffany-300/20 text-tiffany-200 text-[10px] font-mono">
                  {event.type}
                </span>
                <span className="text-xl">📅</span>
              </div>
              <h3 className="text-base md:text-lg font-bold">{event.title}</h3>
              <p className="mt-1 text-xs md:text-sm text-tiffany-200 font-mono">{event.date}</p>
              <p className="mt-1 text-xs md:text-sm text-white/70">{event.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Events */}
      <section className="mb-10 md:mb-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          {lang === "en" ? "Season" : "赛季"}{" "}
          <span className="italic text-tiffany-300">{lang === "en" ? "Timeline" : "时间线"}</span>
        </h2>

        {/* vertical timeline with alternating side cards */}
        <div className="relative">
          {/* center line */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-white/10" aria-hidden="true" />

          <ol className="space-y-8 md:space-y-12">
            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0
              return (
                <li key={index} className="relative">
                  {/* marker dot */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-tiffany-300 ring-4 ring-tiffany-300/20"
                    aria-hidden="true"
                    style={{ top: "1.25rem" }}
                  />

                  <div className={`grid md:grid-cols-2 gap-3 md:gap-6 items-start`}>
                    {/* left spacer or card */}
                    <div className={`${isLeft ? "order-1" : "order-2"} hidden md:block`} />

                    {/* card */}
                    <div className={`${isLeft ? "md:order-2" : "md:order-1"}`}>
                      <article className={`rounded border overflow-hidden ${event.status === "upcoming" ? "border-tiffany-300 bg-tiffany-300/10" : "border-white/10 bg-white/5"}`}>
                        <Image
                          src={event.image}
                          alt={event.title}
                          width={800}
                          height={320}
                          className="w-full h-40 md:h-48 object-cover"
                        />
                        <div className="p-4 md:p-5">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-xs md:text-sm text-tiffany-300">
                              {lang === "en" ? event.date.en : event.date.zh}
                            </span>
                            <span className="text-xl" aria-hidden="true">
                              {event.type === "championship" ? "🏆" : event.type === "win" ? "🥇" : event.type === "competition" ? "🤖" : event.type === "milestone" ? "🔧" : event.type === "event" ? "📅" : "📍"}
                            </span>
                          </div>
                          <h3 className="mt-2 text-base md:text-lg font-bold">
                            {lang === "en" ? event.title.en : event.title.zh}
                          </h3>
                          <p className="mt-1 text-xs md:text-sm text-white/80">
                            {lang === "en" ? event.description.en : event.description.zh}
                          </p>

                          {/* small details row */}
                          <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] md:text-xs text-white/70">
                            <div className="rounded border border-white/10 bg-white/5 px-2 py-1">
                              <span className="text-white/50">{lang === "en" ? "Location: " : "地点："}</span>
                              <span className="font-mono">{lang === "en" ? event.location.en : event.location.zh}</span>
                            </div>
                            <div className="rounded border border-white/10 bg-white/5 px-2 py-1">
                              <span className="text-white/50">{lang === "en" ? "Achievement: " : "成就："}</span>
                              <span className="font-mono text-tiffany-300">
                                {lang === "en" ? event.achievement.en : event.achievement.zh}
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      {/* Season Reflection */}
      <section className="mb-10 md:mb-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          {lang === "en" ? "Season" : "赛季"}{" "}
          <span className="italic text-tiffany-300">{lang === "en" ? "Reflection" : "回顾"}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="rounded border border-white/10 bg-white/5 p-5">
            <h3 className="text-xl font-bold mb-3 text-tiffany-300">
              {lang === "en" ? "What We've Learned" : "我们学到的"}
            </h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li className="flex items-start gap-2"><span className="text-tiffany-300">•</span><span>{lang === "en" ? "Iterative design leads to better robots — we rebuilt our intake 3 times." : "迭代式设计带来更好的机器人——我们的进料机构重做了 3 次。"}</span></li>
              <li className="flex items-start gap-2"><span className="text-tiffany-300">•</span><span>{lang === "en" ? "Alliance strategy is just as important as robot performance." : "联盟策略与机器人性能同样重要。"}</span></li>
              <li className="flex items-start gap-2"><span className="text-tiffany-300">•</span><span>{lang === "en" ? "Documentation and engineering notebooks win awards." : "完善的文档与工程笔记能赢得奖项。"}</span></li>
              <li className="flex items-start gap-2"><span className="text-tiffany-300">•</span><span>{lang === "en" ? "Gracious professionalism builds lasting relationships." : "雅量与专业精神建立长期关系。"}</span></li>
            </ul>
          </div>
          <div className="rounded border border-white/10 bg-white/5 p-5">
            <h3 className="text-xl font-bold mb-3 text-tiffany-300">
              {lang === "en" ? "Looking Ahead" : "展望未来"}
            </h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li className="flex items-start gap-2"><span className="text-tiffany-300">•</span><span>{lang === "en" ? "World Championship preparation and strategy refinement." : "世界赛准备与策略优化。"}</span></li>
              <li className="flex items-start gap-2"><span className="text-tiffany-300">•</span><span>{lang === "en" ? "Mentoring younger teams in our community." : "指导社区里的年轻队伍。"}</span></li>
              <li className="flex items-start gap-2"><span className="text-tiffany-300">•</span><span>{lang === "en" ? "Expanding our outreach and STEM education programs." : "拓展外展与 STEM 教育项目。"}</span></li>
              <li className="flex items-start gap-2"><span className="text-tiffany-300">•</span><span>{lang === "en" ? "Building an even better robot for next season." : "为下个赛季打造更强的机器人。"}</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="rounded border border-white/10 bg-white/5 p-6 md:p-8 text-center">
        <h3 className="text-2xl md:text-3xl font-bold">
          {lang === "en" ? "Follow Our" : "关注我们的"} <span className="italic text-tiffany-300">{lang === "en" ? "Journey" : "旅程"}</span>
        </h3>
        <p className="mt-2 md:mt-3 text-sm md:text-base text-white/80 max-w-2xl mx-auto">
          {lang === "en" ? "Want to stay updated on our competition progress and behind-the-scenes content?" : "想及时了解我们的赛事进展与幕后花絮吗？"}
        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
          <Link
            href="#"
            className="block text-center px-4 py-2 rounded bg-tiffany-300 text-black font-bold hover:bg-tiffany-200 transition"
          >
            {lang === "en" ? "Follow Updates" : "获取更新"}
          </Link>
          <Link
            href="/contact"
            className="block text-center px-4 py-2 rounded border border-tiffany-300 text-tiffany-300 font-bold hover:bg-tiffany-300/10 transition"
          >
            {lang === "en" ? "Contact Us" : "联系我们"}
          </Link>
        </div>
      </section>
    </div>
  )
}

export default TimelinePage
