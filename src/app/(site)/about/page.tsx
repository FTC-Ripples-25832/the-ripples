"use client"

import Image from "next/image"
import React from "react"

import { useAppStore } from "~/context/use-app-store"

export default function AboutPage() {
  const { lang } = useAppStore()
  const t = (en: string, zh: string) => (lang === "en" ? en : zh)

  const members = [
    {
      name: "Henry Zhang",
      role: t("Software Lead (10th Grade)", "软件负责人（十年级）"),
      quote: "",
      img: "/images/member_icons/henry.jpg"
    },
    {
      name: "Alex Luo",
      role: t("Mechanical Lead (12th Grade)", "机械负责人（十二年级）"),
      quote: "",
      img: "/images/member_icons/alex.jpg"
    },
    {
      name: "Jerry Jiang",
      role: t("Outreach Lead (12th Grade)", "外联负责人（十二年级）"),
      quote: "",
      img: "/images/member_icons/jerry.jpg"
    },
    {
      name: "Samson Zhong",
      role: t("Mechanical Team (10th Grade)", "机械组成员（十年级）"),
      quote: "",
      img: "/images/member_icons/samson.jpg"
    },
    {
      name: "Evan Song",
      role: t("Mechanical Team (10th Grade)", "机械组成员（十年级）"),
      quote: "",
      img: "/images/member_icons/evan.jpg"
    },
    {
      name: "Willes Zhang",
      role: t("Software Team (10th Grade)", "软件组成员（十年级）"),
      quote: "",
      img: "/images/member_icons/willes.jpg"
    },
    {
      name: "Hanson Cai",
      role: t("Mechanical Team (11th Grade)", "机械组成员（十一年级）"),
      quote: "",
      img: "/images/member_icons/hanson.jpg"
    },
    {
      name: "Alan Huang",
      role: t("Mechanical Team (11th Grade)", "机械组成员（十一年级）"),
      quote: "",
      img: "/images/member_icons/alan.jpg"
    },
    {
      name: "Hardy Jiang",
      role: t("Mechanical Team (10th Grade)", "机械组成员（十年级）"),
      quote: "",
      img: "/images/member_icons/hardy.jpg"
    },
    {
      name: "Andy Jiang",
      role: t("Mechanical Team (10th Grade)", "机械组成员（十年级）"),
      quote: "",
      img: "/images/member_icons/andy.jpg"
    },
    {
      name: "Jackson",
      role: t("Software Team (10th Grade)", "软件组成员（十年级）"),
      quote: "",
      img: "/images/member_icons/jackson.jpg"
    },
    {
      name: "Jerry Gao",
      role: t("Mechanical Team (10th Grade)", "机械组成员（十年级）"),
      quote: "",
      img: "/images/member_icons/jerryhardware.jpg"
    },
    {
      name: "Randy",
      role: t("Mechanical Mentor (12th Grade)", "机械导师（十二年级）"),
      quote: "",
      img: "/images/member_icons/randy.jpg"
    }
  ]

  return (
    <main className="container mx-auto px-4 py-10 text-white">
      <header className="mb-10">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          {t("About Us", "关于我们")}
        </h1>
        <p className="text-white/80 mt-3">
          {t(
            "Continuously challenge ourselves, grow persistently, inspire others in our region, and have fun along the way.",
            "不断挑战自我、持续成长，同时激励区域中的他人，并在过程中享受乐趣。"
          )}
        </p>
        <p className="text-white/70 mt-2 text-sm">
          {t(
            "We aim to redefine what a rookie FTC team can achieve—through bold robot design, high-quality software, and meaningful outreach.",
            "我们希望重新定义 FTC 新手队伍的可能性——通过大胆的机器人设计、追求极致的软件质量，以及有意义的外联活动。"
          )}
        </p>
      </header>
      <Image
        src={"/images/team.jpg"}
        alt="Team Photo"
        width={1200}
        height={800}
        className="rounded-lg mb-6"
      />
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-orange-400">
          {t("Team Growth Journey", "团队成长历程")}
        </h2>
        <ul className="mt-4 grid md:grid-cols-2 gap-3 text-sm text-white/80">
          <li>
            •{" "}
            {t(
              "Grew from 3 to 15 members; 12 new members trained",
              "从 3 人成长至 15 人；培养训练 12 位新队员"
            )}
          </li>
          <li>
            •{" "}
            {t(
              "Established a school robotics club with funding",
              "创建学校机器人社团并获得学校资金支持"
            )}
          </li>
          <li>
            •{" "}
            {t(
              "Reached 300+ people through outreach and exhibitions",
              "通过外联与展演影响 300+ 人"
            )}
          </li>
          <li>
            •{" "}
            {t(
              "Received mentorship from world champions and top teams",
              "获得来自世界冠军与顶尖队伍的导师支持"
            )}
          </li>
          <li>
            •{" "}
            {t(
              "Achieved World Top 250 autonomous scoring",
              "自主得分位列世界前 250"
            )}
          </li>
          <li>
            •{" "}
            {t(
              "Built 4 robot generations in one season",
              "单赛季完成 4 代机器人"
            )}
          </li>
        </ul>
      </section>

      {/* Members */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-orange-400">
          {t("Member Profiles", "成员简介")}
        </h2>
        <ul className="grid md:grid-cols-3 gap-5">
          {members.map((m, i) => (
            <li
              key={i}
              className="rounded border border-white/10 bg-white/5 p-4"
            >
              <div className="relative h-40 w-full mb-3 overflow-hidden rounded">
                <Image src={m.img} alt={m.name} fill className="object-cover" />
              </div>
              <h3 className="font-semibold">{m.name}</h3>
              <p className="text-sm text-white/80">{m.role}</p>
              <blockquote className="text-sm italic text-white/70 mt-1">
                “{m.quote}”
              </blockquote>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-3 text-orange-400">
            {t("Team Structure & Process", "团队结构与流程")}
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-white/80">
            <ul className="space-y-1">
              <li>
                •{" "}
                {t(
                  "Fully student-led; decisions by democratic vote",
                  "完全学生组织；重要决策采用民主投票"
                )}
              </li>
              <li>
                •{" "}
                {t(
                  "Hardware and software leads coordinate subteams",
                  "硬件与软件各设组长统筹子团队"
                )}
              </li>
              <li>
                •{" "}
                {t(
                  "Outreach is contributed by every member",
                  "外联由每位成员共同参与"
                )}
              </li>
              <li>
                •{" "}
                {t(
                  "Roles assigned by interest, skills, and willingness to learn",
                  "根据兴趣、技能与学习意愿分配职责"
                )}
              </li>
            </ul>
            <ul className="space-y-1">
              <li>
                •{" "}
                {t(
                  "Strategy → Prototyping → Implementation → Optimization",
                  "策略 → 原型 → 实现 → 优化"
                )}
              </li>
              <li>
                •{" "}
                {t(
                  "Summer training: CAD challenges; workshops; virtual evaluation",
                  "暑期训练：CAD 竞赛、工作坊、虚拟评估"
                )}
              </li>
              <li>
                •{" "}
                {t(
                  "Mentor network via Discord/WeChat; visits to local teams",
                  "通过 Discord/微信建立导师网络；走访本地队"
                )}
              </li>
              <li>
                •{" "}
                {t(
                  "Goal: stable, reliable robot and sustainable growth",
                  "目标：稳定可靠的机器人与可持续成长"
                )}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
